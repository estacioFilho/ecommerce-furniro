import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dto/creare-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async create(data: CreateProductDTO) {
    const product = this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  async findAll(params: {
    page?: number;
    limit?: number;
    category?: string;
    isNew?: boolean;
    hasDiscount?: boolean;
  }) {
    const page = params.page ?? 1;
    const limit = params.limit ?? 16;
    const skip = (page - 1) * limit;

    const query = this.productRepository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .skip(skip)
      .take(limit);

    if (params.category) {
      query.andWhere('category.name = :category', {
        category: params.category,
      });
    }

    if (typeof params.isNew === 'boolean') {
      query.andWhere('product.isNew = :isNew', { isNew: params.isNew });
    }

    if (params.hasDiscount) {
      query.andWhere('product.discount > 0');
    }

    const [products, total] = await query.getManyAndCount();

    return {
      total,
      page,
      limit,
      data: products,
    };
  }

  async findOne(id: number) {
    return this.productRepository.findOne({
      where: { id },
      relations: ['category'],
    });
  }

  async update(id: number, data: UpdateProductDTO) {
    await this.productRepository.update(id, data);
    return this.findOne(id);
  }

  async partialUpdate(id: number, data: Partial<UpdateProductDTO>) {
    await this.productRepository.update(id, data);
    return this.findOne(id);
  }
}
