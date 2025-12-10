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
}
