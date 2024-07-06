import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getFeaturedProducts() {
    return this.http.get("http://localhost:3000/products");
  }

  getNewArrivalProducts() {
    return this.http.get("http://localhost:3000/newArrival");
  }

  getProductById(productId: number) {
    return this.http.get("http://localhost:3000/items/" + productId);
  }
}
