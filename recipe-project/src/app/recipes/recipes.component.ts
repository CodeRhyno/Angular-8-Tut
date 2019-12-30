import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeElement: Recipe;

  constructor() { }

  ngOnInit() {
  }

  recipeFromList(recipe: {name: string, description: string, imagePath: string}) {
    this.recipeElement = recipe;
  }

}
