import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Product } from '../../models/product';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [
        Validators.minLength(10),
        Validators.required,
        Validators.pattern('[0-9]{10}'),
      ]),
      adress: new FormControl('', Validators.required),
    });
    console.log(this.items);
  }
  clearCart(item: Product) {
    this.CartService.clearCart();
  }
  onSubmit(): void {
    // Process checkout data here
    if (this.form.valid) {
      this.CartService.clearCart();
      this.result = 'success';
      this.empty = '';
      this.CustomerService.addCustomer(this.customer).subscribe((data) => {
        console.log(data);
      });

      console.log(this.customer);
    }
  }
}
