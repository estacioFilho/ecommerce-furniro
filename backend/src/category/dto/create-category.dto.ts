
import { IsString, IsOptional, IsBoolean, IsNumber, IsPositive } from 'class-validator';

export class CreateCategoryDTO {
  @IsString()
  name: string;

  @IsOptional()
  @IsBoolean()
  isDisabled: boolean;

  @IsNumber()
  @IsPositive()
  rangeId: number;
}
