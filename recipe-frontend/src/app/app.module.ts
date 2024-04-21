import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { CreateRecipeComponent } from "./create-recipe/create-recipe.component";
import { ViewRecipeComponent } from "./view-recipe/view-recipe.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        CreateRecipeComponent,
        ViewRecipeComponent,
        EditRecipeComponent
    ],
    imports: [
        BrowserModule,  
        HttpClientModule,
        Router,
        FormsModule,
        ReactiveFormsModule
      //  NgbModule.forRoot(),
        

        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule{ }