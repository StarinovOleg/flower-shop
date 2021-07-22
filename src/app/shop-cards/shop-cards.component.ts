import { Component, OnInit } from '@angular/core';
import { products } from '../products';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop-cards',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.scss'],
})
export class ShopCardsComponent implements OnInit {
  products = products;

  constructor() {}

  ngOnInit(): void {}
}
