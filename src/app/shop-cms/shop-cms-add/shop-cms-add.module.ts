import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsAddComponent } from './shop-cms-add.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShopCmsAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'shop-cms-add',
        pathMatch: 'full',
        component: ShopCmsAddComponent,
      },
    ]),
  ],
  exports: [ShopCmsAddComponent],
})
export class ShopCmsAddModule {}
