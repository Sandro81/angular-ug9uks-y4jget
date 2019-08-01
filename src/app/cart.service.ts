import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  //In the CartService class, define an items property to store the list (array) of the current products in the cart.
  items = [];
}