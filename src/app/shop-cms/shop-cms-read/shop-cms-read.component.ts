import { Component, OnInit } from '@angular/core';
import { CustomerDisplay } from '../models/customer-display';
import { customerDisplayService } from '../services/customer-display.service';
@Component({
  selector: 'app-shop-cms-read',
  templateUrl: './shop-cms-read.component.html',
  styleUrls: ['./shop-cms-read.component.scss'],
})
export class ShopCmsReadComponent implements OnInit {
  customerDisplay: CustomerDisplay[] = [];
  constructor(private customerDisplayService: customerDisplayService) {}

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers(): void {
    this.customerDisplayService
      .getAlls()
      .subscribe((customerDisplay) => (this.customerDisplay = customerDisplay));
  }
  reloadPage() {
    window.location.reload();
  }
}
