import {
  IsString,
  IsNumber,
  IsBoolean,
  IsArray,
  ArrayMaxSize,
  ArrayMinSize,
  IsOptional,
  IsIn,
  IsPositive,
  IsHexColor,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @MaxLength(15)
  name: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsPositive()
  priceWithDiscount: number;
  
  @IsString()
  smallDescription: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(26)
  subtitle: string;

  @IsString()
  sku: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(1)
  discount: number;

  @IsBoolean()
  isNew: boolean;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsString({ each: true })
  images: string[];

  @IsArray()
  @ArrayMaxSize(15)
  @IsNumber({}, { each: true })
  @Min(0, { each: true })
  reviews: number[];

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(4)
  @IsIn(['S', 'M', 'L', 'XL'], { each: true })
  size: string[];

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(3)
  @IsHexColor({ each: true })
  colors: string[];

  @IsArray()
  @IsString({ each: true })
  tags: string[];

  @IsArray()
  @ArrayMinSize(3)
  @ArrayMaxSize(3)
  @IsString({ each: true })
  shareLink: string[];

  @IsBoolean()
  isDisabled: boolean;

  @IsNumber()
  categoryId: number;
}
