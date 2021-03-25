import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  fullName: string;
  address: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
  }

  processPayment = () => {
    this.cartService.clearCart();
    this.router.navigate([this.router.url + '/confirmation']);
  }
}
