import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza', 'This is simply a test.', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg', [
            new Ingredient('Meat', 1),
            new Ingredient('Flour', 1),
        ]),
        new Recipe('Burger', 'This is simply a test. 2', 'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg', [
            new Ingredient('Bread', 2),
            new Ingredient('Cheese', 1),
            new Ingredient('Meat', 1),
        ]),
        new Recipe('Pasta', 'This is simply a test. 3', 'https://images.immediate.co.uk/production/volatile/sites/2/2018/11/OnePotPasta-47b5b0a.jpg?webp=true&quality=90&resize=940%2C399', [
            new Ingredient('Pasta', 1),
            new Ingredient('Cheese', 1),
            new Ingredient('Sauce', 1),
        ]),
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}