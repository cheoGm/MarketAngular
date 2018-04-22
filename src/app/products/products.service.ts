import { Injectable } from '@angular/core';
import { ProductsMock } from './ProductsMock';

@Injectable()
export class ProductsService {

  private products = new ProductsMock().products;

  constructor() { }

  public showProducts(){
    return this.products;
  }

}
