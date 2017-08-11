
import { Ingredient } from './../../shared/model/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {

// to show what is new in the slice
showChangeInSlice = new Subject <Ingredient[]> ();

private  theIngredients: Ingredient [] = 
 
    [

      new Ingredient ('Apples', 5),
      new Ingredient ('Tomatos', 10),

    ] ;


  getTheIngredients () {
      return this.theIngredients.slice(); // you get a new copy all the time
  }

  onAddItems (ingredient: Ingredient) {
      this.theIngredients.push (ingredient); // pushes it to the slice not the original
      this.showChangeInSlice.next(this.theIngredients.slice());
  }

 
  onAddIngredeint (ingredient: Ingredient []) {
                                // to take out each array and inset it as each element of the array
     this.theIngredients.push (...ingredient);
     this.showChangeInSlice.next(this.theIngredients.slice());
  }
}
