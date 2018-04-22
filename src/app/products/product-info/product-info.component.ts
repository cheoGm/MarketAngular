import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  @Input()
  product : Product;

  constructor() { }

  ngOnInit() {
  }

}
