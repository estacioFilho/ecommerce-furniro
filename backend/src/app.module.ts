import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { DataBaseModule } from './db/db.module';

@Module({
  imports: [ProductModule, CategoryModule, DataBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
