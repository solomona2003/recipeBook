import { ShoppingListService } from './../../shopping-list/service/shopping-list.service';
import { Ingredient } from './../../shared/model/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './../recipes-list/model/recipes.model';


@Injectable ()

export class RecipeService {


  constructor (private shoppingListService: ShoppingListService) {


  }

recipeSelected = new EventEmitter <Recipe> ();

private theRecipe: Recipe[] = 

  [

   new Recipe('Basic Schnitze',
              'Eat it in Germany',
              'https://goo.gl/yZkZDF', 
               [ 
                 new Ingredient('Meat', 1),
                 new Ingredient ('French Freis', 20)
               ]

              ),

    new Recipe ('Basic Burger', 
              'Eat it anywhere',
               'https://goo.gl/r1sdCR',
                 [
                   new Ingredient('Buns', 2),
                   new Ingredient('Meat', 1)
                 ]
                
                )

  ];

  getRecipes () {
    return this.theRecipe.slice();
  }

// from recipe service
 
    addIngredientsToShoppingList (ingredient: Ingredient[]) {

      this.shoppingListService.onAddIngredeint(ingredient);

     }

}
