import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RangeService } from './range.service';
import { RangeController } from './range.controller';
import { RangeEntity } from './entities/range.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RangeEntity])],
  providers: [RangeService],
  controllers: [RangeController],
})

export class RangeModule { }
