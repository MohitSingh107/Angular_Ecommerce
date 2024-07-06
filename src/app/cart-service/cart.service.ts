import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  postProductInCart(productId:number){
    return this.http.post("http://localhost:3000/cart", {id:productId}, {responseType:'text'});
  }

  getProductFromCart(){
    return this.http.get("http://localhost:3000/cart");
  }

  removeProductFromCart(productId:number){
    return this.http.delete("http://localhost:3000/cart/"+ productId , {responseType:'text'});
  }
}
