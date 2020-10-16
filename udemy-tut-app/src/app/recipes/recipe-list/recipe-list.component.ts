import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe('Salad','Tomato Salad','https://images.pexels.com/photos/4989069/pexels-photo-4989069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'),
    new Recipe('Pizza', 'Jelepeno Pizza', 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
  ];
  constructor() { }

  ngOnInit() {
  }

}
