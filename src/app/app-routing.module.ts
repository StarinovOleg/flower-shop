import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './shop/about/about.component';
import { ComingSoonComponent } from './main-layout/coming-soon/coming-soon.component';
import { DeliveryComponent } from './shop/product-delivery/delivery.component';
import { NewsComponent } from './shop/product-section/news/news.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CartComponent } from './shop/product-shoping/cart/cart.component';
import { ShopCmsComponent } from './shop-cms/shop-cms.component';
import { ShopCmsReadComponent } from './shop-cms/shop-cms-read/shop-cms-read.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'about', component: AboutComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'news', component: NewsComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop-cms', component: ShopCmsComponent },

  {
    path: 'shop-cms',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./shop-cms/shop-cms.module').then((m) => m.ShopCmsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
