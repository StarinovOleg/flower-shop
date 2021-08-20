import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-services/cart.service';

import { Product } from '../services/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items=this.CartService.getItems();
  result: string | undefined;
  empty="Here will all your orders";
  constructor(
    private CartService: CartService,
  ) { }

  ngOnInit(): void {
    
  }
  clearCart(item: Product) {
    this.CartService.clearCart();
  }
    onSubmit(): void {
    // Process checkout data here
    this.CartService.clearCart(); 
    this.result="success";
    this.empty="";
    console.log(this.result);
  }
}
