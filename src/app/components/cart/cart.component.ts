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
  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.sharedCart.subscribe(cart => this.products = cart);
  }

  ngOnInit(): void {
    this.calculateTotal();
  }

  calculateTotal = () => {
    this.products.forEach( product => {
      this.total += product.price;
    });
  }

}
