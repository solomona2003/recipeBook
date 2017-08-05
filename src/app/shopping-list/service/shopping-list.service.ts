import { EventEmitter } from '@angular/core';
import { Ingredient } from './../../shared/model/ingredient.model';

export class ShoppingListService {

// to show what is new in the slice
showChangeInSlice = new EventEmitter <Ingredient[]> ();

private  theIngredients: Ingredient [] = 
 
    [

      new Ingredient ('Apples', 5),
      new Ingredient ('Tomatos', 10),

    ] ;


  getTheIngredients () {
      return this.theIngredients.slice(); // you get a new copy all the time
  }

  onAddItems (ingredient: Ingredient) {
      this.theIngredients.push (ingredient); //pushes it to the slice not the original
      this.showChangeInSlice.emit (this.theIngredients.slice());
  }

  
  onAddIngredeint (ingredient: Ingredient []) {
                                //to take out each array and inset is as each
     this.theIngredients.push (...ingredient);
     this.showChangeInSlice.emit (this.theIngredients.slice());
  }
}
