import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsReadComponent } from './shop-cms-read.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopCmsReadComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShopCmsReadComponent],
})
export class ShopCmsReadModule {}
