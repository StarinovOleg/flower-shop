import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
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
    private formBuilder: FormBuilder
  ) {
    this.form = new FormGroup({
      name: new FormControl('Tom', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}'),
      ]),
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, Validators.required],
      address: [null, Validators.required],
    });
  }
  clearCart(item: Product) {
    this.CartService.clearCart();
  }
  onSubmit(): void {
    // Process checkout data here
    this.CartService.clearCart();
    this.result = 'success';
    this.empty = '';
    console.log(this.customer);
  }
}
