
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  priceWithDiscount: number;

  @Column({ default: false })
  isNew: boolean;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  discount: number;
  
  @Column({ length: 255 })
  smallDescription: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ length: 50 })
  subtitle: string;

  @Column({ length: 9, unique: true })
  sku: string;


  @Column({
    type: 'text',
    array: true,
    nullable: true
  })
  images: string[];

  @Column('simple-array')
  reviews: number[];

  @Column('simple-array')
  size: string[];

  @Column('simple-array')
  colors: string[];

  @Column('simple-array')
  tags: string[];

  @Column('simple-array')
  shareLink: string[];

  @Column({ default: false })
  isDisabled: boolean;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
}

