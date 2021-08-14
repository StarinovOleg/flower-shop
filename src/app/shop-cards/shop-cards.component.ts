import { Component, OnInit } from '@angular/core';
//import { products } from '../products';

import { Product } from '../product';
import { productsService } from '../products.service';
@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss'],
})
export class ShopCardsComponent implements OnInit {
  //products = products;
  product: Product[] = [];
  constructor(private productsService: productsService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
      this.productsService.getAlls()
    .subscribe(product => this.product = product);
   
  }
}
