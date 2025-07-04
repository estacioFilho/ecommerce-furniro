import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.categoryRepository.find({
      where: { isDisabled: false },
    });
  }

  async findOne(id: number) {
    await this.exists(id);
    return this.categoryRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, data: UpdateCategoryDTO) {
    await this.categoryRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.exists(id);
    const category = await this.findOne(id);
    if (category) {
      category.isDisabled = true;
      await this.categoryRepository.save(category);
      return { message: `Category ${id} has been deleted` };
    }
  }

  async exists(id: number) {
    if (
      !(await this.categoryRepository.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`Category with ${id} does not exist`);
    }
  }
}
