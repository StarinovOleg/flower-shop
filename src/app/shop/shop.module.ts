import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'shop', pathMatch: 'full', component: ShopComponent },
    ]),
  ],
  exports: [RouterModule, ShopComponent],
  bootstrap: [ShopComponent],
})
export class ShopModule {}
