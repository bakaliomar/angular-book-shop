import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
@Output() selectRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("test name", "this a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLuEIzY9DQbJIDOoSpDh5XMjY_BvtpqWqp-X0H-NvOA&s")
  ];

  selectedRecipe: Recipe;

  onSelectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.selectRecipe.emit(recipe);
  }

  ngOnInit(): void {
      
  }
}
