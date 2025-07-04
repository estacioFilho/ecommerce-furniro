import { FactoryCallback } from 'typeorm-extension';
import { ProductEntity } from '../../product/entities/product.entity';
import type { Faker } from '@faker-js/faker'
import { CategoryEntity } from 'src/category/entities/category.entity';

const productFactory: FactoryCallback<ProductEntity> = (faker: Faker) => {
  const product = new ProductEntity();
  product.name = faker.commerce.productName().slice(0, 30);
  product.price = parseFloat(faker.commerce.price({ min: 400, max: 5000 }));
  product.smallDescription = faker.commerce.productAdjective().slice(0, 255);
  product.description = faker.commerce.productDescription();
  product.subtitle = faker.commerce.department();
  product.sku = faker.string.alphanumeric(9).toUpperCase();
  product.discount = parseFloat(faker.string.numeric(2));
  product.isNew = faker.datatype.boolean();
  product.images = [
    faker.image.urlLoremFlickr({ category: 'product' }),
    faker.image.urlLoremFlickr({ category: 'product' }),
    faker.image.urlLoremFlickr({ category: 'product' }),
    faker.image.urlLoremFlickr({ category: 'product' }),
  ];
  product.reviews = [
    faker.number.int({ min: 1, max: 5 }),
    faker.number.int({ min: 1, max: 5 }),
  ];
  product.size = faker.helpers.arrayElement(['L', 'XL', 'XS']);
  product.colors = [faker.color.human(), faker.color.human()];
  product.tags = [faker.commerce.productAdjective(), faker.commerce.productMaterial()];
  product.shareLink = [faker.internet.url(), faker.internet.url()];
  product.isDisabled = faker.datatype.boolean();

  const categoryId = faker.helpers.arrayElement([5, 6, 7]);
  product.category = { id: categoryId } as CategoryEntity;

  return product;
}

export default productFactory;