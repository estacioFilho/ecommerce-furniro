import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(data: CreateCategoryDTO) {
    const category = this.categoryRepository.create(data);
    return this.categoryRepository.save(category);
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCategoryDTO) {
    await this.categoryRepository.update(id, data);
    return this.findOne(id);
  }
}
