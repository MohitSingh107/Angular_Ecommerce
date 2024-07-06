import { Component, Input } from '@angular/core';
import { CartService } from '../cart-service/cart.service';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  active_icon: boolean = true;

  totalCount:number = 0;

  cartItemList:ProductModel[]= [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.getCartProducts();
  }

  getCartProducts(){
    this.cartService.getProductFromCart().subscribe((data)=>{
      this.cartItemList = data as ProductModel[];
      this.totalCount = this.cartItemList.length;
    })
  }

  removeItem(cartId:number){
    this.cartService.removeProductFromCart(cartId).subscribe((data)=>{
      if(data = 'Item removed from cart successfully'){
        this.getCartProducts();
      }
    })
  }

}
