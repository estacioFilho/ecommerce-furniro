import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;


  @Column({ type: 'varchar', length: 255 })
  smallDescription: string;

  @Column({ type: 'text' })
  description: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  subtitle: string;

  @Column({
    type: 'varchar',
    length: 9,
    unique: true,
  })
  sku: string;

  @Column('decimal', { nullable: true })
  discount: number;

  @Column({ default: false })
  isNew: boolean;

  @Column({
    type: 'text',
    array: true,
  })
  images: string[];

  @Column({
    type: 'text',
    array: true,
    nullable: true,
  })
  reviews: number[];

  @Column({
    type: 'enum',
    enum: ['L', 'XL', 'XS'],
  })
  size: 'L' | 'XL' | 'XS';

  @Column({
    type: 'text',
    array: true,
  })
  colors: string[];

  @Column({
    type: 'text',
    array: true,
  })
  tags: string[];

  @Column({
    type: 'text',
    array: true
  })
  shareLink: string[];

  @Column({ default: false })
  isDisabled: boolean;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
}
