import { Injectable } from '@angular/core';
import { addCategoryRequest } from '../models/add-category-request-model';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { error } from 'console';
import { environment } from '../../../../environments/environment';
import { Category } from '../models/category-model';
import { updateCategory } from '../models/update-category-model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient , private cookieService:CookieService) { }

  getAllCategories(query?:string,sortBy?: string, sortDirection?: string, pageNumber?: number, pageSize?: number):Observable<Category[]>{
    let params = new HttpParams();

    if (query) {
      params = params.set('query', query)
    }
    if (sortBy) {
      params = params.set('sortBy', sortBy)
    }

    if (sortDirection) {
      params = params.set('sortDirection', sortDirection)
    }
    if (pageNumber) {
      params = params.set('pageNumber', pageNumber)
    }

    if (pageSize) {
      params = params.set('pageSize', pageSize)
    }

    return this.http.get<Category[]>(`${environment.apiBaseUrl}/api/Categories`,{params:params});

  }

  getCategoryByID(id:string):Observable<Category>{
    return this.http.get<Category>(`${environment.apiBaseUrl}/api/Categories/${id}`);

  }

  getCategoryCount(): Observable<number> {
    return this.http.get<number>(`${environment.apiBaseUrl}/api/categories/count`);
  }

  //addAuth=true query string used to add Interceptor
  addCategory(model:addCategoryRequest) : Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories?addAuth=true`,model);
    
  }

 
  updateCategory(id:string, updateCategory:updateCategory):Observable<Category>{
    return this.http.put<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`, updateCategory);

  }
  deleteCategory(id:string):Observable<Category>{
    return this.http.delete<Category>(`${environment.apiBaseUrl}/api/Categories/${id}?addAuth=true`);
  }
}
