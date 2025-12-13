import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private Api_Url = 'http://localhost:5088/api/product';
  private apiUrl = 'http://localhost:5088/tasks';

  private http: HttpClient = inject(HttpClient);

  getProducts() {
    return this.http.get(this.Api_Url);
  }
  addProduct(data:any){
    return this.http.post(this.Api_Url, data);
  }

  updateProduct(id:number, data:any){
    return this.http.put(`${this.Api_Url}/${id}`, data);
  }

  removeProduct(id:number){
    return this.http.delete(`${this.Api_Url}/${id}`);
  }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTaskById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  updateTask(id: string, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, task);
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
