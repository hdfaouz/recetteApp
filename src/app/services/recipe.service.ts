import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3000/recettes';
  
  constructor(private http: HttpClient) {}

  getRecettes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

   createRecipe(recipe:Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(this.apiUrl, recipe);
   }

   getRecipById(id:string): Observable<any>{
    return this.http.get<any> (`${this.apiUrl}/${id}`);
   }
   deletRecip(id:any):Observable<any>{
 return this.http.delete(`${this.apiUrl}/${id}`)
   }
}