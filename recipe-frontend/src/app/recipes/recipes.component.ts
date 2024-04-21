import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
 // styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
   recipes: Recipe[];
   constructor(private recipeService: RecipeService,
    private router: Router
   ){
       this.recipes = [];
   }

   ngOnInit(): void {
     this.getRecipes();
   }

   getRecipes(): void{
    this.recipeService.getRecipes()
    .subscribe((recipes : Recipe[]) => {
      this.recipes = recipes;
      this.router.navigate(['/recipe'])
    });
   }
}
