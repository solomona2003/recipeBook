import { Ingredient } from './../../shared/model/ingredient.model';
import { ShoppingListService } from './../../shopping-list/service/shopping-list.service';
import { ShoppingListComponent } from './../../shopping-list/shopping-list.component';
import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../recipes-list/model/recipes.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeD: Recipe;
 
 

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }

   // this is alternative 1
  // onAddToShoppingList() { 

  //   this.shoppingListService.onAddIngredeint (this.recipeD.ingredient);

  // }


  // this is alternative 2

  onAddToShoppingList() {
    
    this.recipeService.addIngredientsToShoppingList(this.recipeD.ingredient);

}

}
