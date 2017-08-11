import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id: number;
editMode = false;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.activatedRoute.params.subscribe( // please don forget to unsubscribe from your custom observables
(params: Params) => {
this.id = +params['id'];                // check if the route is recipes/id/edit or only recipes/new
this.editMode = params['id'] != null;  // if it has an id edit mode is true
console.log(this.editMode);

}
);

  }

}
