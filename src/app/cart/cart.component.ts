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
  
  constructor(
    private CartService: CartService,
  ) { }

  ngOnInit(): void {
    
  }
  clearCart(item: Product) {
    this.CartService.clearCart();
    //window.alert('Flower has been added tp the cart')
  }
}
