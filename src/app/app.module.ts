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
