import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  items;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    items;
    checkoutForm;
  }
}