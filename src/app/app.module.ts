import { RecipeService } from './recipes/service/recipe.service';
import { ShoppingListService } from './shopping-list/service/shopping-list.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import {AppRouteModule} from './routing/app-route.module';
import { RecipesLandComponent } from './recipes/recipes-land/recipes-land.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesLandComponent,
    RecipeEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    ReactiveFormsModule
  ],
  providers: [ ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
