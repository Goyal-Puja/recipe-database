// src/recipe.controller.ts

import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';

@Controller('api/recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe | undefined> {
    return this.recipeService.findOne(+id);
  }

  @Post()
  async create(@Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    return this.recipeService.create(recipeData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() recipeData: Partial<Recipe>): Promise<Recipe | undefined> {
    return this.recipeService.update(+id, recipeData);
  }
}
