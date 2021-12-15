import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsComponent } from './shop-cms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShopCmsReadModule } from './shop-cms-read/shop-cms-read.module';
import { ShopCmsAddModule } from './shop-cms-add/shop-cms-add.module';
import { ShopCmsReadComponent } from './shop-cms-read/shop-cms-read.component';
import { ShopCmsAddComponent } from './shop-cms-add/shop-cms-add.component';
import { CmsHeaderComponent } from './shop-cms-common/cms-header/cms-header.component';

@NgModule({
  declarations: [ShopCmsComponent, CmsHeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopCmsReadModule,
    ShopCmsAddModule,

    RouterModule.forChild([
      { path: 'shop-cms', pathMatch: 'full', component: ShopCmsComponent },
      {
        path: 'shop-cms-read',
        pathMatch: 'full',
        component: ShopCmsReadComponent,
      },
      {
        path: 'shop-cms-add',
        pathMatch: 'full',
        component: ShopCmsAddComponent,
      },
    ]),
  ],
  exports: [RouterModule, ShopCmsComponent],
  bootstrap: [ShopCmsComponent],
})
export class ShopCmsModule {}
