import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormListComponent } from './form-list/form-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },
  { path: 'list', component: RecipeListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormListComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for 404
];