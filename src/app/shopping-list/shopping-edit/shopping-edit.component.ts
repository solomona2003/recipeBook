import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef: ElementRef;
 @ViewChild('amountInput') AmountInputRef: ElementRef;

 @Output () newIngridient = new EventEmitter <Ingredient> ();

  constructor() { }

  ngOnInit() {
  }


  onAdd() {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.AmountInputRef.nativeElement.value;
    const theNewIngredient =  new Ingredient (name, amount);
    this.newIngridient.emit(theNewIngredient);
  }

onDelete() {

  
}


}
