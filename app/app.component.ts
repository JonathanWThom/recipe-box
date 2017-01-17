import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe Box</h1>
    <ul>
      <li>{{firstRecipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  firstRecipe: Recipe = new Recipe("Fluffy French Toast", "Bread, eggs, milk, flour, cinnamon, oil", "Fry it!");
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) { }
}
