import { Controller, Get, Post, Put, Patch, Param, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/creare-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';

@Controller('products')
export class ProductController {
  @Post()
  async create(@Body() body: CreateProductDTO) {
    // Lógica de criação depois vai chamar o service
    return {
      message: 'Produto criado com sucesso',
      data: body,
    };
  }

  @Get()
  async findAll() {
    // Lógica para buscar todos
    return {
      message: 'Lista de produtos',
      data: [], // depois vai buscar do banco
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // Lógica para buscar um produto
    return {
      message: `Produto com id ${id} encontrado`,
      data: {}, // depois vai buscar do banco
    };
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateProductDTO) {
    // Lógica para atualizar totalmente
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
    // Lógica para atualização parcial
    return {
      message: `Produto com id ${id} parcialmente atualizado`,
      data: body,
    };
  }
}
