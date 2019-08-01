import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

ngOnInit() {
  this.route.paramMap.subscribe(params => {
    //https://angular-ug9uks-y4jget.stackblitz.io/products/0  <---- this get the id parameters
    // dichiarato in app.module.ts -> RouterModule.forRoot([
    // { path: 'products/:productId', component: ProductDetailsComponent },
 
    console.log(params.get('productId'));
    this.product = products[+params.get('productId')];
  });
}

}