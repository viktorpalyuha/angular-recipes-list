import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeSelected: Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  addToShoppingList(): void {
    for (const ingredient of this.recipeSelected.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
