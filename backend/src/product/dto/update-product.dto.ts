import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDTO } from './creare-product.dto';

export class UpdateProductDTO extends PartialType(CreateProductDTO) {}
