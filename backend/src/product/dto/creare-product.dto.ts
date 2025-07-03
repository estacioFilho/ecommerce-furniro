import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  IsEnum,
  IsUUID,
  IsUrl,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsString()
  smallDescription: string;

  @IsString()
  description: string;

  @IsString()
  subtitle: string;

  @IsString()
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

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reviews?: string[];

  @IsEnum(['L', 'XL', 'XS'])
  size: 'L' | 'XL' | 'XS';

  @IsArray()
  @IsString({ each: true })
  colors: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsUrl()
  shareLink?: string;

  @IsUUID()
  categoryId: string;
}
