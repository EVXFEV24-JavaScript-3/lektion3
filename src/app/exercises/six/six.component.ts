import { Component, OnInit } from '@angular/core';

interface DummyJsonRecipe {
  name: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
}

@Component({
  selector: 'app-six',
  templateUrl: './six.component.html',
  styleUrl: './six.component.css'
})
export class SixComponent implements OnInit {
  recipes: DummyJsonRecipe[] = [];

  ngOnInit(): void {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then((res) => {
        this.recipes = res.recipes;
      });
  }
}
