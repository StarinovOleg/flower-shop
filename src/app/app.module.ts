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

import { ShopModule } from './shop/shop.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CmsHeaderComponent } from './shop-cms/shop-cms-common/cms-header/cms-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CmsHeaderComponent,
    FooterComponent,
    HeaderWorldOrderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShopCmsModule,
    ShopModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
