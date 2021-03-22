import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
