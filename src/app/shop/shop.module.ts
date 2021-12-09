import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';
import { PromoComponent } from './product-section/promo/promo.component';
import { NewsComponent } from './product-section/news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './product-shoping/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShopComponent,
    PromoComponent,
    NewsComponent,
    ProductCatalogComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'shop', pathMatch: 'full', component: ShopComponent },
    ]),
  ],
  exports: [RouterModule, ShopComponent],
  bootstrap: [ShopComponent],
})
export class ShopModule {}
