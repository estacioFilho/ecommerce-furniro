import { CreateRangeDTO } from './create-range.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCategoryDTO extends PartialType(CreateRangeDTO) {}
