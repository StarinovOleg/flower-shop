import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCmsComponent } from './shop-cms.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShopCmsReadModule } from './shop-cms-read/shop-cms-read.module';
import { ShopCmsAddModule } from './shop-cms-add/shop-cms-add.module';
import { CmsHeaderComponent } from './shop-cms-common/cms-header/cms-header.component';

@NgModule({
  declarations: [ShopCmsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShopCmsReadModule,
    ShopCmsAddModule,

    RouterModule.forChild([
      {
        path: 'shop-cms',
        component: ShopCmsComponent,
        pathMatch: 'full',
        children: [
          {
            path: 'shop-cms-read',
            pathMatch: 'prefix',
            loadChildren: () =>
              import('./shop-cms-read/shop-cms-read.module').then(
                (m) => m.ShopCmsReadModule
              ),
          },
          {
            path: 'shop-cms-add',
            pathMatch: 'prefix',
            loadChildren: () =>
              import('./shop-cms-add/shop-cms-add.module').then(
                (m) => m.ShopCmsAddModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule, ShopCmsComponent],
  bootstrap: [ShopCmsComponent],
})
export class ShopCmsModule {}
