import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CustomerService } from '../../services/customer.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Product } from '../../models/product';
export class Customer {
  name: string | undefined;
  phone: string | undefined;
  adress: string | undefined;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.CartService.getItems();
  result: string | undefined;
  empty = 'Here will all your orders';
  customer: Customer = new Customer();
  form!: FormGroup;
  constructor(
    private CartService: CartService,
    private CustomerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
    });
    console.log(this.items);
  }
  clearCart(item: Product) {
    this.CartService.clearCart();
  }
  onSubmit(items: any): void {
    // Process checkout data here
    this.CartService.clearCart();
    this.result = 'success';
    this.empty = '';
    console.log(this.customer);
  }
}
