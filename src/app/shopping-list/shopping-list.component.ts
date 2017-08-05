import { Ingredient } from './../shared/model/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {

  ingredient: Ingredient [];
  // theIngredients: Ingredient [] = [

  //   new Ingredient ('Apples', 5),
  //   new Ingredient ('Tomatos', 10),



  // ] ;


  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  //  what is already in the list
   this.ingredient = this.shoppingListService.getTheIngredients();
   // what is new after add
   this.shoppingListService.showChangeInSlice.subscribe ((ingredient: Ingredient[]) => {this.ingredient = ingredient})

  }


  onListAdded (ingredient: Ingredient) {

    this.shoppingListService.onAddItems(ingredient);
  }




}
