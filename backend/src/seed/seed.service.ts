import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { RangeEntity } from '../range/entities/range.entity';
import { CategoryEntity } from '../category/entities/category.entity';
import { ProductEntity } from '../product/entities/product.entity';

import RangeData from './types/range.type';
import CategoryData from './types/category.type';
import ProductData from './types/product.type';

import rangesJson from 'src/populate/ranges.json';
import categoriesJson from 'src/populate/categories.json';
import productsJson from 'src/populate/products.json';


const ranges: RangeData[] = rangesJson as RangeData[] ?? [];
const categories: CategoryData[] = categoriesJson as CategoryData[] ?? [];
const products: ProductData[] = productsJson as ProductData[] ?? [];

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(RangeEntity) private rangeRepo: Repository<RangeEntity>,
    @InjectRepository(CategoryEntity) private categoryRepo: Repository<CategoryEntity>,
    @InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>,
  ) {}
  
  async run() {
    console.log('Starting the seed...');

    for (const r of ranges) {
      const exists = await this.rangeRepo.findOne({ where: { name: r.name } });
      if (!exists) await this.rangeRepo.save(this.rangeRepo.create(r));
    }

    for (const c of categories) {
      const range = await this.rangeRepo.findOne({ where: { id: c.rangeId } });
      if (!range) continue;

      const exists = await this.categoryRepo.findOne({ where: { name: c.name } });
      if (!exists) {
        await this.categoryRepo.save(this.categoryRepo.create({
          name: c.name,
          isDisabled: c.isDisabled,
          range,
        }));
      }
    }

    for (const p of products) {
      const category = await this.categoryRepo.findOne({ where: { id: p.categoryId } });
      if (!category) continue;

      const priceWithDiscount = Number(p.price) - Number(p.price) * Number(p.discount)
      const exists = await this.productRepo.findOne({ where: { name: p.name } });
      if (!exists) {
        await this.productRepo.save(this.productRepo.create({
          ...p,
          category,
          priceWithDiscount,
        }));
      }
    }

    console.log('Seed completed!');
  }
}
