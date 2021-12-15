import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';

import { productsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: productsService,
    private CartService: CartService
  ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getAll(id);
    }
  }
  getAll(id: number): void {
    this.productsService.getAll(id).subscribe({
      next: (product) => (this.product = product),
    });
  }
  addToCart(product: Product) {
    this.CartService.addToCart(product);
    this.router.navigate(['']);
    //window.alert('Flower has been added tp the cart')
  }
}
