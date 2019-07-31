import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product;

  constructor(
    private route: ActivatedRoute,
  ) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    //https://angular-ug9uks-y4jget.stackblitz.io/products/0  <---- this get the id parameters
    console.log(params.get('productId'));
    this.product = products[+params.get('productId')];
  });
}

}