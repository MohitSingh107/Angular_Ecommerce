import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  images: string[] = [
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-2-1.jpg',
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-2-2.jpg',
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-3-2.jpg'
  ];
  selectedImage: string = this.images[0];
  quantity: number = 1;

  constructor() { }

  ngOnInit(): void { }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  incrementQuantity(): void {
    this.quantity++;
  }

  decrementQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
