import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "root",
    "database": "recipe",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
    }),
    TypeOrmModule.forFeature([Recipe])
  ],
  
  controllers: [AppController, RecipeController],
  providers: [AppService, RecipeService],
})
export class AppModule {}
