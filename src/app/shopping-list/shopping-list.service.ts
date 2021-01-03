import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  changedList = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.changedList.emit([...this.ingredients]);
  }
}
