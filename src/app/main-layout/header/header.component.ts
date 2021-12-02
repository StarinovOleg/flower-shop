import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
items=this.CartService.getItems();
  constructor(
    private CartService: CartService,
  ) { }

  ngOnInit(): void {
  }

}
