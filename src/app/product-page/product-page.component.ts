import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../model/product.model';
import { ProductService } from '../product-service/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  itemDetail!:ProductModel;

  images: string[] = [
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-2-1.jpg',
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-2-2.jpg',
    'https://evara-nextjs.vercel.app/assets/imgs/shop/product-3-2.jpg'
  ];
  selectedImage: string = this.images[0];
  quantity: number = 1;

  constructor(private route:ActivatedRoute,private productService: ProductService) { }

  ngOnInit() { 
   const id = this.route.snapshot.paramMap.get('id');
   console.log(id)
   this.productService.getProductById(Number(id)).subscribe((data)=>{
    this.itemDetail = data as ProductModel;
   })
   }

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
