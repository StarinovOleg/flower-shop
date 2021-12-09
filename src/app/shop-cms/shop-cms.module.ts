import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsComponent } from './shop-cms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShopCmsReadModule } from './shop-cms-read/shop-cms-read.module';
import { ShopCmsAddModule } from './shop-cms-add/shop-cms-add.module';

@NgModule({
  declarations: [ShopCmsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopCmsReadModule,
    ShopCmsAddModule,
    RouterModule.forChild([
      { path: 'shop-cms', pathMatch: 'full', component: ShopCmsComponent },
    ]),
  ],
  exports: [RouterModule, ShopCmsComponent],
  bootstrap: [ShopCmsComponent],
})
export class ShopCmsModule {}
