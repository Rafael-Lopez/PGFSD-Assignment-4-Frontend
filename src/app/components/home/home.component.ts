import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RestApiService} from '../../rest-api.service';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  products: any;

  constructor(private service: RestApiService) {
  }

  getProducts(): void {
    const response = this.service.getProducts();
    response.subscribe(data => this.products = data);
  }
}
