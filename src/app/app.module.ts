import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PromoComponent } from './promo/promo.component';
import { ShopCardsComponent } from './shop-cards/shop-cards.component';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderWorldOrderComponent } from './header-world-order/header-world-order.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromoComponent,
    ShopCardsComponent,
    FooterComponent,
    HeaderWorldOrderComponent,
    NewsComponent,
    ProductDetailsComponent,
    DeliveryComponent,
    ComingSoonComponent,
    CartComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'shop-cards', component: ShopCardsComponent },
      { path: 'news', component: NewsComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: '', redirectTo: '/shop-cards', pathMatch: 'full' },
      { path: 'delivery', component: DeliveryComponent },
      { path: 'coming-soon', component: ComingSoonComponent },
      { path: 'cart', component: CartComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
