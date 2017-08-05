import { EventEmitter } from '@angular/core';
import { Recipe } from './../recipes-list/model/recipes.model';



export class RecipeService {


recipeSelected = new EventEmitter <Recipe> ();

private theRecipe: Recipe[] = [

   new Recipe('Recipe 1',
    'The description  1',
    'https://goo.gl/U0vT94'),

    new Recipe ('Recipe 2', 'The description  2',
    'https://goo.gl/uKoeEd')

  ];

  getRecipes () {
    return this.theRecipe.slice();
  }

}
