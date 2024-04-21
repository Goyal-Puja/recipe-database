// src/recipe.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, NotFoundException, BadRequestException } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';


@Controller('api/recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAllRecipes();
  }

  @Get(':id')
  async findRecipeById(@Param('id', ParseIntPipe) id: number): Promise<Recipe> {
    try{
    return this.recipeService.findRecipeById(id);
    } catch (error) {
      if(error instanceof NotFoundException){
        throw new NotFoundException(`recipe with Id ${id} not found`)
      }
    }
  }

  @Post()
  async createRecipe(@Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    try{
    return this.recipeService.createRecipe(recipeData);
    } catch (error){
      throw new BadRequestException('Invalid Recipe Data');
    }
  }

  @Put(':id')
  async updateRecipeById(@Param('id', ParseIntPipe) id: number, @Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    try{
    return this.recipeService.update(id, recipeData);
    } catch(error) {
      if(error instanceof NotFoundException){
        throw new NotFoundException('Recipe with ID ${id} not found');
      }
    }
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<{ message: string}> {
    try{
      await this.recipeService.deleteRecipe(id);
      return { message: `Recipe with ID ${id} deleted successfully`};
    } catch (error) {
      if(error instanceof NotFoundException) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }
      throw error;
    }
  }
}
