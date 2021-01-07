import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Burger',
  //     'Simple burger',
  //     'https://rtvi.com/upload/iblock/58e/58e23f14e52fe081141c45cb39a56fd4.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   ),
  //   new Recipe(
  //     'Poke',
  //     'Consists of fish, rice, etc.',
  //     'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1',
  //     [new Ingredient('Salmon', 1), new Ingredient('Rice', 500)]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
  }

  saveRecipes(): void {
    this.http
      .put(
        'https://angular-recipe-book-67bab-default-rtdb.firebaseio.com/recipes.json',
        this.getRecipes()
      )
      .subscribe();
  }

  fetchRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(
        'https://angular-recipe-book-67bab-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap(recipes => {
          this.recipes = recipes;
          this.recipesChanged.next([...this.recipes]);
        })
      );
  }
}
