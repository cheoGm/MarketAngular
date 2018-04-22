import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsHomeComponent } from './products-home/products-home.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductsHomeComponent
  },
  {
    path: 'add',
    component: ProductsHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
