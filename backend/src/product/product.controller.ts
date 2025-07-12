import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Patch, 
  Param, 
  Body, 
  Query, 
  DefaultValuePipe, 
  ParseIntPipe, 
  Delete, 
  ParseBoolPipe 
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { OptionalParseIntPipe } from 'src/pipes/parse-optional-int.pipe';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductService) { }

  @Post()
  async create(@Body() body: CreateProductDTO) {
    await this.productsService.create(body);
    return {
      message: 'Product created successfully',
      data: body,
    };
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(16), ParseIntPipe) limit: number,
    @Query('category') category?: string,
    @Query('order') order?: string,
    @Query('priceMin', new  OptionalParseIntPipe) priceMin?: number,
    @Query('priceMax', new  OptionalParseIntPipe) priceMax?: number,
    @Query('isNew', new ParseBoolPipe({ optional: true })) isNew?: boolean,
    @Query('discount', new ParseBoolPipe({ optional: true })) discount?: boolean,
  ) {
    return {
      message: 'Product List',
      data: await this.productsService.find({
        page,
        limit,
        category,
        order,
        priceMin,
        priceMax,
        isNew,
        discount,
      }),
    };
  }


  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe) id: number) {

    return {
      message: `Produto com id ${id} encontrado`,
      data: await this.productsService.findOne(id),
    };
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe) id: number,
    @Body() body: UpdateProductDTO
  ) {
    return {
      message: `Produto com id ${id} atualizado`,
      data: await this.productsService.update(id, body),
    };
  }

  @Patch(':id')
  async partialUpdate(
    @Param('id', new ParseIntPipe) id: number,
    @Body() body: Partial<UpdateProductDTO>,
  ) {
    return {
      message: `Product with id ${id} partially updated`,
      data: await this.productsService.partialUpdate(id, body),
    };
  }

  @Delete(':id')
  async delete(@Param('id', new ParseIntPipe) id: number) {
    return this.productsService.delete(id)
  }
}
