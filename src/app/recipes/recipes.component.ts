import { RecipeService } from './service/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
    
  }





// onRecipeSelector (recipe: Recipe) {
// this.selectedRecipe = recipe;
// }




}
