import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';

@Entity({ name: 'range' })
export class RangeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  name: string; 

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ default: false })
  isDisabled: boolean;

  @OneToMany(() => CategoryEntity, (category) => category.range)
  categories: CategoryEntity[];
}
