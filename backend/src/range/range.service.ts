import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RangeEntity } from './entities/range.entity';
import { CreateRangeDTO } from './dto/create-range.dto';

@Injectable()
export class RangeService {
  constructor(
    @InjectRepository(RangeEntity) private readonly rangeRepository: Repository<RangeEntity>,
  ) { }

  async findAll(): Promise<RangeEntity[]> {
    return await this.rangeRepository.find({ relations: ['categories'] });
  }

  async findOne(id: number): Promise<RangeEntity> {
    await this.exists(id);
    const range = await this.rangeRepository.findOne({
      where: { id },
      relations: ['categories'],
    });
    if (!range) {
      throw new NotFoundException(`Range with id ${id} not found`);
    }
    return range;
  }

  async create(
    createRangeDto: CreateRangeDTO
  ): Promise<{ message: string; data: RangeEntity }> {
    const range = this.rangeRepository.create(createRangeDto);
    const savedRange = await this.rangeRepository.save(range);

    return {
      message: `Range '${savedRange.name}' created successfully`,
      data: savedRange,
    };
  }

  async update(
    id: number,
    updateRangeDto: Partial<CreateRangeDTO>
  ): Promise<{ message: string; data: RangeEntity }> {
    await this.exists(id);
    const range = await this.findOne(id);
    Object.assign(range, updateRangeDto);
    const updatedRange = await this.rangeRepository.save(range);

    return {
      message: `Range with id ${id} updated successfully`,
      data: updatedRange,
    };
  }

  async delete(id: number): Promise<object> {
    await this.exists(id);
    await this.rangeRepository.delete(id);

    return { message: `Record with id ${id} deleted successfully` };
  }

  async exists(id: number) {
    if (
      !(await this.rangeRepository.count({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`Range with ${id} does not exist`);
    }
  }
}
