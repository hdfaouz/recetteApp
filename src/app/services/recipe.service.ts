import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private http = inject(HttpClient); 

  getAllRecipe(): Observable<any> {
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
  }
}