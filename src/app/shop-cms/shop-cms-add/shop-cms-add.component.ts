import { Component, OnInit } from '@angular/core';
import { ProductAddService } from '../services/products-add.service';
import { ProductAdd } from '../models/products-add';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shop-cms-add',
  templateUrl: './shop-cms-add.component.html',
  styleUrls: ['./shop-cms-add.component.scss'],
})
export class ShopCmsAddComponent implements OnInit {
  constructor(private ProductAddService: ProductAddService) {}
  productAdd: ProductAdd = new ProductAdd();
  form!: FormGroup;
  result: string | undefined;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]'),
      ]),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
    });
  }
  onSubmit(): void {
    this.result = 'success';
    this.ProductAddService.addProduct(this.productAdd).subscribe((data) => {
      console.log(data);
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
