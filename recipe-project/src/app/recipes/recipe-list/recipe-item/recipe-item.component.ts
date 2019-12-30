import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: {
    name: string,
    description: string,
    imagePath: string
  };

  @Output() recipeElement = new EventEmitter<{name: string, description: string, imagePath: string}>();
  
  constructor() { }

  ngOnInit() {
  }

  selectRecipe() {
    this.recipeElement.emit({
      name: this.recipe.name,
      description: this.recipe.description,
      imagePath: this.recipe.imagePath
    })
  }

}
