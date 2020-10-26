import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopComponent } from './shop.component';

const router: Routes = [
  {path: '', component: ShopComponent},
  {path: ':id', component: ProductDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
