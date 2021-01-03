import { RecipeService } from './../recipe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeClick(recipe: Recipe): void {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
