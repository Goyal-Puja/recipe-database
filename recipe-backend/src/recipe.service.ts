import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async findAllRecipes(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findRecipeById(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne(id);
    if (!recipe) {
      throw new NotFoundException(`Recipe with ID ${id} not found`);
    }
    return recipe;
  }

  async createRecipe(recipeData: Partial<Recipe>): Promise<Recipe> {
    const recipe = this.recipeRepository.create(recipeData);
    return this.recipeRepository.save(recipe);
  }

  async update(id: number, recipeData: Partial<Recipe>): Promise<Recipe> {
    await this.findRecipeById(id);
    await this.recipeRepository.update(id, recipeData);
    return this.recipeRepository.findOne(id);
  }

  async deleteRecipe(id: number): Promise<void> {
    await this.findRecipeById(id);
    await this.recipeRepository.delete(id);
  }
}
