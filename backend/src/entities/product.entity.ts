import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
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
    length: 4,
  })
  images: string[];

  @Column({
    type: 'text',
    array: true,
    nullable: true,
    length: 5,
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
