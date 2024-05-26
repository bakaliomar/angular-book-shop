import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-sopping-list',
  templateUrl: './sopping-list.component.html',
  styleUrl: './sopping-list.component.scss'
})
export class SoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("apple", 5),
    new Ingredient("tomatos", 10)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
