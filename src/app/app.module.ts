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
import {MatCardModule} from '@angular/material/card';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import { HeaderWorldOrderComponent } from './header-world-order/header-world-order.component';
import { NewsComponent } from './news/news.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';
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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    //FontAwesomeModule
    NgbModule,
    RouterModule.forRoot([
      {path: 'shop-cards', component: ShopCardsComponent}, 
      {path: 'news', component: NewsComponent}, 
      //{path: 'product-details', component: ProductDetailsComponent}, 
      { path: 'products/:id', component: ProductDetailsComponent },
      {path: '', redirectTo: '/shop-cards', pathMatch: 'full'}, 
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
