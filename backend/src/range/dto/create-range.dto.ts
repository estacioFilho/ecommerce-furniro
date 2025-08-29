import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateRangeDTO {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsBoolean()
  isDisabled: boolean;
  
}
