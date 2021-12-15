import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsAddComponent } from './shop-cms-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopCmsAddComponent],
  imports: [CommonModule, RouterModule],
  exports: [ShopCmsAddComponent],
})
export class ShopCmsAddModule {}
