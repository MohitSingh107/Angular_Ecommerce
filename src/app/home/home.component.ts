import { Component } from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { ProductModel } from '../model/product.model';
import { CartService } from '../cart-service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  featuredProdutList: ProductModel[] = [];

  newArrivalList: ProductModel[] = [];

  rating: number = 0;

  updateCounter: number = 0;

  cartItemList: ProductModel[] = [];

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.getCartItems();
    this.fetchFeaturedProducts();
    this.fetchNewArrivalsProducts();
  }

  fetchFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((data) => {
      this.featuredProdutList = data as ProductModel[];
    });
  }

  fetchNewArrivalsProducts() {
    this.productService.getNewArrivalProducts().subscribe((res) => {
      this.newArrivalList = res as ProductModel[];
    })
  }

  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  }


  getCartItems() {
    this.cartService.getProductFromCart().subscribe((data) => {
      if (data) {
        this.cartItemList = data as ProductModel[];
        this.updateCounter = this.cartItemList.length;
      }
    });
  }

  addToCartItems(productId: number) {
    this.cartService.postProductInCart(productId).subscribe((data) => {
      if (data = 'Product Added in cart successfully') {
        this.updateCounter++;
      }
    });
  }
}
