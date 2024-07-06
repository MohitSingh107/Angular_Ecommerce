import { Component, Input } from '@angular/core';
import { ProductModel } from '../model/product.model';
import { ProductService } from '../product-service/product.service';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() status: boolean = false;
  @Input() counter: number = 0

  ngOnInit(){
    this.getCartItems();
  }

  ngOnChanges(){
    this.getCartItems();
  }

  getCartItems(){
    this.cartService.getProductFromCart().subscribe((data) => {
      if(data){
        this.cartItemList = data as ProductModel[];
        this.counter = this.cartItemList.length;
      }
    });
  }

  cartItemList: ProductModel[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

}
