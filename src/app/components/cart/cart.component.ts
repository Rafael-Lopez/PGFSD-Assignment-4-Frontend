import { Component, OnInit } from '@angular/core';
import {CartService} from '../../cart.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(private cartService: CartService) {
    this.cartService.sharedCart.subscribe(cart => this.products = cart);
  }

  ngOnInit(): void {
  }

}
