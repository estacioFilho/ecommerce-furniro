import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { RangeService } from './range.service';
import { CreateRangeDTO } from './dto/create-range.dto';

@Controller('ranges')
export class RangeController {
  constructor(private readonly rangeService: RangeService) {}

  @Get()
  async findAll() {
    return await this.rangeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.rangeService.findOne(id);
  }

  @Post()
  async create(@Body() createRangeDto: CreateRangeDTO) {
    return await this.rangeService.create(createRangeDto);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRangeDto: Partial<CreateRangeDTO>,
  ) {
    return await this.rangeService.update(id, updateRangeDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.rangeService.delete(id);
  }
}
