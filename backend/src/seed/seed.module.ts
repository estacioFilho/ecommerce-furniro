import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RangeEntity } from '../range/entities/range.entity';
import { CategoryEntity } from '../category/entities/category.entity';
import { ProductEntity } from '../product/entities/product.entity';
import { SeedService } from './seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([RangeEntity, CategoryEntity, ProductEntity])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
