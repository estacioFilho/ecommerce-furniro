import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { runSeeder } from 'typeorm-extension';
import { ProductEntity } from '../product/entities/product.entity';
import { CategoryEntity } from '../category/entities/category.entity';
import ProductSeeder from './products.seeder';
import { config } from 'dotenv';

config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  entities: [ProductEntity, CategoryEntity],
});

async function seed() {
  await AppDataSource.initialize();
  await runSeeder(AppDataSource, ProductSeeder);
  console.log('✅ Seed completo!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('❌ Erro ao rodar seed:', error);
  process.exit(1);
});
