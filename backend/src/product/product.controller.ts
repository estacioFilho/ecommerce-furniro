import { Controller, Get, Post, Put, Patch, Param, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) {}

  @Post()
  async create(@Body() body: CreateProductDTO) {
    await this.productsService.create(body);
    return {
      message: 'Product created successfully',
      data: body,
    };
  }

  @Get()
  async findAll() {
    return {
      message: 'Product List',
      data: await this.productsService.find()
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return {
      message: `Produto com id ${id} encontrado`,
      data: {}, 
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductDTO) {
    return {
      message: `Produto com id ${id} atualizado`,
      data: body,
    };
  }

  @Patch(':id')
  async partialUpdate(
    @Param('id') id: string,
    @Body() body: Partial<UpdateProductDTO>,
  ) {
    return {
      message: `Produto com id ${id} parcialmente atualizado`,
      data: body,
    };
  }
}
