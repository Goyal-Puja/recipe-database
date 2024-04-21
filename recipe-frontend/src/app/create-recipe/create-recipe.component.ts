import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  //imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent implements OnInit{
  recipeForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService
  ) {} 
  
  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    }); 
  }
  onSubmit() {
    if(this.recipeForm.invalid){
      return;
    }

    const recipeData: Recipe = this.recipeForm.value;
    this.recipeService.createRecipe(recipeData).subscribe(
      (response) => {
        console.log("Recipe created", response);
      },
      (error)=> {
          console.log('Error', error);
      }
      );
    
  }

}