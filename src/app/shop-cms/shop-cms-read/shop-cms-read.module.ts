import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsReadComponent } from './shop-cms-read.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopCmsReadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'shop-cms-read',
        pathMatch: 'full',
        component: ShopCmsReadComponent,
      },
    ]),
  ],
  exports: [ShopCmsReadComponent],
})
export class ShopCmsReadModule {}
