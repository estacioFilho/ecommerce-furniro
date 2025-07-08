import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ProductEntity } from '../../product/entities/product.entity';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    type: 'varchar',
    unique: true,
    length: 30,
  })
  name: string;
  @Column({ default: false })
  isDisabled: boolean;

  @Column({ type: 'text'})
  image: string;


  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
