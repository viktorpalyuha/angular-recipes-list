import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  changedList = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(): Ingredient[] {
    return [...this.ingredients];
  }

  getIngredient(i: number): Ingredient {
    return this.ingredients[i];
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.changedList.next([...this.ingredients]);
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.changedList.next([...this.ingredients]);
  }

  updateIngredient(index: number, updatedIngredient: Ingredient): void {
    this.ingredients[index] = updatedIngredient;
    this.changedList.next([...this.ingredients]);
  }
}
