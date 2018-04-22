import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component'

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
