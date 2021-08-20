import { Injectable } from '@angular/core';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] =[];
  addToCart(product:Product){
    this.items.push(product);
    const length=this.items.length;
    console.log(length);
  }
 
  getItems() {
    return this.items;
  }
  clearCart() {
   // this.items = [];
   // return this.items;
    this.items.pop(); 
  }
  constructor() { }
}
