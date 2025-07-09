import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { CategoryEntity } from 'src/category/entities/category.entity';
import ProductFilterParams from './types/product-filter-params.type';
import ProductPaginate from './types/product-paginate.type';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) { }

  async create(data: CreateProductDTO) {
    const category = await this.categoryRepository.findOneBy({
      id: data.categoryId,
    });
    if (!category) {
      throw new NotFoundException(
        `Category with id ${data.categoryId} not found`,
      );
    }

    const product = this.productRepository.create({
      ...data,
      category,
    });

    return this.productRepository.save(product);
  }

  async find(filter: ProductFilterParams): Promise<ProductPaginate> {
    const { page, limit: rawLimit, category, priceMin, priceMax, isNew, discount } = filter;

    const limit = Math.min(rawLimit, 100);
    const skip = (page - 1) * limit;

    const query = this.productRepository.createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('product.isDisabled = :isDisabled', { isDisabled: false });

    if (category) {
      const categoryName = await this.categoryRepository.findOneBy({ name: category });
      if (!categoryName) {
        throw new NotFoundException(`Category "${categoryName}" not found.`);
      }
      query.andWhere('product.categoryId = :categoryId', { categoryId: categoryName.id });
    }

    if (typeof isNew === 'boolean') {
      query.andWhere('product.isNew = :isNew', { isNew });
    }

    if (discount) {
      query.andWhere('product.discount > 0');
    }

    if (typeof priceMin === 'number') {
      query.andWhere('product.price >= :priceMin', { priceMin });
    }

    if (typeof priceMin === 'number') {
      query.andWhere('product.price <= :priceMax', { priceMax });
    }


    const [data, total] = await query
      .take(limit)
      .skip(skip)
      .getManyAndCount();

    const pageTotal = Math.ceil(total / limit);

    return {
      total,
      page,
      pageTotal,
      limit,
      data,
    };
  }



  async findOne(id: number) {
    await this.exists(id);
    return this.productRepository.findOne({
      where: { id },
      relations: ['category']
    });
  }

  async update(id: number, data: UpdateProductDTO) {
    await this.exists(id)
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) throw new NotFoundException(`Product ${id} not found`);
    Object.assign(product, data);
    if (data.categoryId) {
      const category = await this.categoryRepository.findOneBy({ id: data.categoryId });
      if (!category) throw new NotFoundException(`Category ${data.categoryId} not found`);
      product.category = category;
    }
    return this.productRepository.save(product);
  }


  async partialUpdate(id: number, data: Partial<UpdateProductDTO>) {
    await this.exists(id);
    await this.productRepository.update(id, data);
    return data;
  }

  async delete(id: number) {
    await this.exists(id);
    const product = await this.findOne(id);
    if (product) {
      product.isDisabled = true;
      await this.productRepository.remove(product);
      return { message: `Product ${id} has been deleted` };
    }
  }

  async exists(id: number) {
    if (
      !(await this.productRepository.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`Product does not exist`);
    }
  }
}
