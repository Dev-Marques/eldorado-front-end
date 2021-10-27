import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../model/category.model';
import { ResponseCategory } from '../model/responseCategory.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'http://54.232.145.137:3000/api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  public getCategory(): Observable<ResponseCategory> {
    return this.httpClient.get<ResponseCategory>(`${this.apiUrl}category`);
  }

  public postCategory(category: any): Observable<Category> {
    return this.httpClient.post<any>(
      `${this.apiUrl}category/`,
      category,
      this.httpOptions
    );
  }

  public deleteCategory(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}category/${id}`);
  }
}
