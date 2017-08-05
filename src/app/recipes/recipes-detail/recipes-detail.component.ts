import { Recipe } from './../recipes-list/model/recipes.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeD: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
