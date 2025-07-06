import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  IsEnum,
  IsUrl,
  IsPositive,
  MaxLength,
  isBoolean,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @MaxLength(30)
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  @MaxLength(255)
  smallDescription: string;

  @IsString()
  description: string;

  @IsString()
  @MaxLength(100)
  subtitle: string;

  @IsString()
  @MaxLength(9)
  sku: string;

  @IsOptional()
  @IsNumber()
  discount?: number;

  @IsOptional()
  @IsBoolean()
  isNew?: boolean;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsArray()
  @IsNumber({}, { each: true })
  reviews: number[];

  @IsEnum(['L', 'XL', 'XS'])
  size: 'L' | 'XL' | 'XS';

  @IsArray()
  @IsString({ each: true })
  colors: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @IsString({ each: true })
  shareLink: string[];

  @IsNumber()
  @IsPositive()
  categoryId: number;
}
