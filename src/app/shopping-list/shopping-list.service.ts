import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  changedList = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.changedList.next([...this.ingredients]);
  }
}
