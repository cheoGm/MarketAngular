import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.css']
})
export class ProductsHomeComponent implements OnInit {

  public  routeParam : String;

  constructor(private route: ActivatedRoute) {
    console.log("JA JA ");
    route.params.subscribe( params => { 
      console.log(params);
                                    this.routeParam = params['page'];
                                    
                              } );

   }

  ngOnInit() {

  }

}
