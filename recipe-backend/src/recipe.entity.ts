import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('json', { nullable: true })
  ingredients: Ingredient[];
}
