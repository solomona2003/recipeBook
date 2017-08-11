import { RecipeEditComponent } from './../recipes/recipe-edit/recipe-edit.component';
import { RecipesLandComponent } from './../recipes/recipes-land/recipes-land.component';
import { RecipesDetailComponent } from '../recipes/recipes-detail/recipes-detail.component';
import { RecipesListComponent } from '../recipes/recipes-list/recipes-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const appRoutes: Routes = [

    {path: '', redirectTo: '/recipes', pathMatch: 'full' },

    // shopping-list
    {path: 'shopping-list', component: ShoppingListComponent, children: [
            {path: ':shopping-edit', component: ShoppingEditComponent}
    ]},
    // recipes
    {path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipesLandComponent},
        {path: 'new', component: RecipeEditComponent}, // for add new Recipe button
        {path: ':id', component: RecipesDetailComponent},
        {path: ':id/edit', component: RecipeEditComponent} // for editing existing recipe on edit recipe button on recipe details
    ]}


];

@NgModule (
    {
        imports: [RouterModule.forRoot(appRoutes)],
        exports: [RouterModule]
    }
)

export class AppRouteModule {

}
