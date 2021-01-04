import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from './../recipe.model';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeSelected: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeSelected = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList(): void {
    for (const ingredient of this.recipeSelected.ingredients) {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onEditRecipe(): void {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
