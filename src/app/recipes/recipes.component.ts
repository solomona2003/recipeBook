import { RecipeService } from './service/recipe.service';
import { Recipe } from './recipes-list/model/recipes.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe ( (recipe: Recipe) => {this.selectedRecipe = recipe}    )
  }





// onRecipeSelector (recipe: Recipe) {
// this.selectedRecipe = recipe;
// }




}
