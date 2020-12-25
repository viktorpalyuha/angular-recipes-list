import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from './../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1'
    ), new Recipe(
      'Poke',
      'Consists of fish, rice, etc.',
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1'
    ),
  ];

  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeClick(recipe: Recipe): void {
    this.recipeClicked.emit(recipe);
  }
}
