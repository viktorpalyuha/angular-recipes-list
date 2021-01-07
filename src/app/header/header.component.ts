import { RecipeService } from './../recipes/recipe.service';
import { Component } from '@angular/core';

@Component ({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private recipeService: RecipeService) {}

    onSaveData(): void {
        this.recipeService.saveRecipes();
    }

    onFetchData(): void {
        this.recipeService.fetchRecipes().subscribe();
    }
}
