import { Recipe } from './../../recipes/recipes-list/model/recipes.model';
import { RecipeService } from './../../recipes/service/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';



@Injectable ()

export class DataStorageService {

    constructor (private http: Http, private recipeService: RecipeService) {}

    storeData() {
        return this.http.put('https://ng-recipe-book-56769.firebaseio.com/recipe.json',
        this.recipeService.getRecipes());
    }


    fetchData () {
        return this.http.get('https://ng-recipe-book-56769.firebaseio.com/recipe.json').map(
            (response: Response) => {
                const recipes: Recipe[] = response.json();
                for (const recipe of recipes) {
                    if (!recipe['ingredient']) {
                        recipe['ingredient'] = [];
                        console.log('there is no ingredient in ' + recipe.name +
                        " therefore initialised incomming "
                        + recipe.name + "'s ingredient array to empty []");

                    }
                }
                return recipes;
            }).
        subscribe(
            (recipe: Recipe[]) => {

                this.recipeService.setRecipes(recipe);
                console.log(recipe);

            }
        );
}
}
