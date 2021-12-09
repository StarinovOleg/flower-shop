import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main-layout/header/header.component';
import { PromoComponent } from './shop/product-section/promo/promo.component';
import { ProductCatalogComponent } from './shop/product-catalog/product-catalog.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderWorldOrderComponent } from './main-layout/header-world-order/header-world-order.component';
import { NewsComponent } from './shop/product-section/news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { DeliveryComponent } from './shop/product-delivery/delivery.component';
import { ComingSoonComponent } from './main-layout/coming-soon/coming-soon.component';
import { CartComponent } from './shop/product-shoping/cart/cart.component';
import { AboutComponent } from './shop/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopCmsModule } from './shop-cms/shop-cms.module';
import { ShopCmsAddModule } from './shop-cms/shop-cms-add/shop-cms-add.module';
import { ShopCmsReadModule } from './shop-cms/shop-cms-read/shop-cms-read.module';
import { ShopModule } from './shop/shop.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // PromoComponent,
    //ProductCatalogComponent,
    FooterComponent,
    HeaderWorldOrderComponent,
    //NewsComponent,
    // ProductDetailsComponent,
    // DeliveryComponent,
    // ComingSoonComponent,
    //CartComponent,
    //AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FormsModule,
    // ReactiveFormsModule,
    //MatCardModule,
    //MatIconModule,
    // NgbModule,
    ShopCmsModule,
    ShopCmsAddModule,
    ShopCmsReadModule,
    ShopModule,
    RouterModule.forChild([
      {
        path: 'shop-cms',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('./shop-cms/shop-cms.module').then((m) => m.ShopCmsModule),
      },
      {
        path: 'shop-cms-read',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('./shop-cms/shop-cms-read/shop-cms-read.module').then(
            (m) => m.ShopCmsReadModule
          ),
      },
      {
        path: 'shop-cms-add',
        pathMatch: 'prefix',
        loadChildren: () =>
          import('./shop-cms/shop-cms-add/shop-cms-add.module').then(
            (m) => m.ShopCmsAddModule
          ),
      },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
