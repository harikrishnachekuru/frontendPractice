import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  private Api_Url = 'http://localhost:5088/api/product';

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
  
}
