import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { HeaderWorldOrderComponent } from './main-layout/header-world-order/header-world-order.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopCmsModule } from './shop-cms/shop-cms.module';
import { ShopCmsAddModule } from './shop-cms/shop-cms-add/shop-cms-add.module';
import { ShopCmsReadModule } from './shop-cms/shop-cms-read/shop-cms-read.module';
import { ShopModule } from './shop/shop.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderWorldOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopCmsModule,
    ShopCmsAddModule,
    ShopCmsReadModule,
    ShopModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
