import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../Customer';
import { CUSTOMERS } from '../mock-Customers';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
 public customersList = CUSTOMERS;

  constructor() {  }

  ngOnInit() {

  }

}
