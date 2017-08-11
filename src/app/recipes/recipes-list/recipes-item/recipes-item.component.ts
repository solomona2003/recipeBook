// import { RecipeService } from './../../service/recipe.service';
import { Recipe } from './../model/recipes.model';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

@Input () recipe: Recipe;
@Output () recipeSelected = new EventEmitter <void>();
@Input () index: number;


// constructor( private recipService: RecipeService) { }

  ngOnInit() {
  }



// onSelected() {
//  this.recipService.recipeSelected.emit(this.recipe);
// }

}
