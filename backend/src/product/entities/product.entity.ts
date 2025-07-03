import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity({ name: 'products' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    type: 'varchar',
    length: 30,
  })
  name: string;

  @Column('decimal')
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

  @Column({ default: true })
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
  reviews: string[];

  @Column({
    type: 'enum',
    enum: ['L', 'XL', 'XS'],
  })
  size: 'L' | 'XL' | 'XS';

  @Column({
    type: 'varchar',
    length: 9,
    array: true,
  })
  colors: string[];

  @Column({
    type: 'varchar',
    length: 30,
    array: true,
    nullable: true,
  })
  tags: string[];

  @Column({ nullable: true })
  shareLink: string;

  @ManyToOne(() => CategoryEntity, (category) => category.name)
  category: CategoryEntity;
}
