import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-form-list',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule // Ajouté pour ngModel
  ],
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
  recipesList: Recipe[] = []; // Meilleur typage
  recipe = {
    nom: '',
    ingredients: '',
    etapes: '',
    img: '',
    categorie: '',
    date: new Date() // Changé de 'data' à 'date' pour cohérence
  };

  constructor(
    private recipeService: RecipeService, // Renommé pour convention
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecettes().subscribe(recipes => {
      this.recipesList = recipes;
      console.log(recipes);
    });
  }

  ajouterRecipe() {
    this.recipeService.createRecipe(this.recipe).subscribe(newRecipe => {
      if (newRecipe) {
        // Ajoute la nouvelle recette à la liste existante
        this.recipesList.push(newRecipe);
        // Redirige vers la liste
        this.router.navigate(['/recipe-list']); // Meilleure pratique que navigateByUrl
      }
    });
  }
}