import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../cart.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cart: Product[];
  itemsInCart = 0;

  constructor(private router: Router, private cartService: CartService) {
    this.cartService.sharedCart.subscribe(cart => this.itemsInCart = cart.length);
  }

  ngOnInit(): void {
  }

  redirect(path: string): void {
    this.router.navigate([path]);
  }
}
