import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'home' , component : HomeComponent},
    {path :'list', component : RecipeListComponent},
    {path:'login', component : LoginComponent}
];
