import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe("Fluffy French Toast", "Bread, eggs, milk, flour, cinnamon, oil", "Fry it!"),
    new Recipe("Chocolate Mousse Pie", "Chocolate, butter, cream, sugar, amazingness", "Bake it!"),
    new Recipe("Denver Omelet", "Eggs, onion, bell peppers, ham", "Prepare very carefully"),
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
