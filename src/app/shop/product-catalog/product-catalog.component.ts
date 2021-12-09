import { Component, OnInit } from '@angular/core';
//import { products } from '../products';

import { Product } from '../models/product';
import { productsService } from '../services/products.service';
@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss'],
})
export class ProductCatalogComponent implements OnInit {
  //products = products;
  product: Product[] = [];
  constructor(private productsService: productsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productsService
      .getAlls()
      .subscribe((product) => (this.product = product));
  }
}
