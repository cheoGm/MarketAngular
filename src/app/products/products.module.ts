import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsHomeComponent } from './products-home/products-home.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductInfoComponent, ProductAddComponent, ProductsHomeComponent],
  providers:[ProductsService]
})
export class ProductsModule { }
