import { Component } from '@angular/core';
import { ProductService } from './product-service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent {

  productsArray: any;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllItems().subscribe(data => {
      this.productsArray = data;
    })
  }

}
