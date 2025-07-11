import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { RangeEntity } from '../../range/entities/range.entity';
import { ProductEntity } from '../../product/entities/product.entity';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ default: false })
  isDisabled: boolean;

  @ManyToOne(() => RangeEntity, (range) => range.categories)
  range: RangeEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}

