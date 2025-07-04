import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../product/entities/product.entity';
import productFactory from './factory/product.factory';
import { faker } from '@faker-js/faker';

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
  ): Promise<any> {
    const factory = await dataSource.getRepository(ProductEntity);

    for (let i = 0; i < 20; i++) {
      const product = await productFactory(faker, {});
      await factory.save(product);
    }
  }
}
