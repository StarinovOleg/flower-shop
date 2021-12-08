import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsComponent } from './shop-cms.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShopCmsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'shop-cms', component: ShopCmsComponent }]),
  ],
  exports: [RouterModule, ShopCmsComponent],
  bootstrap: [ShopCmsComponent],
})
export class ShopCmsModule {}
