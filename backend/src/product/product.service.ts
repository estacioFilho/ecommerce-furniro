import { Injectable, NotFoundException, Query, Get, ParseIntPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { CategoryEntity } from 'src/category/entities/category.entity';

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

  @Get()
  async find(
    @Query('page', new ParseIntPipe({ errorHttpStatusCode: 422})) page = 1,
    @Query('limit', new ParseIntPipe({ errorHttpStatusCode: 422})) limit = 10,
  ) {
    
    const offSet = (page - 1) * limit

    const products = await this.productRepository
      .createQueryBuilder('product')
      .limit(limit)
      .offset(offSet)
      .getMany();
    return products;
  }

  async findOne(id: number) {
    await this.exists(id);
    return this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async update(id: number, data: UpdateProductDTO) {
    await this.exists(id);
    await this.productRepository.update(id, data);
    return this.findOne(id);
  }

  async partialUpdate(id: number, data: Partial<UpdateProductDTO>) {
    await this.exists(id);
    await this.productRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.exists(id);
    const product = await this.findOne(id);
    if (product) {
      product.isDisabled = true;
      await this.productRepository.save(product);
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
      throw new NotFoundException(`Category with ${id} does not exist`);
    }
  }
}
