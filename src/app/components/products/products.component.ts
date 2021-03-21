import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  faCoffee = faUtensils;

  constructor(private service: RestApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const response = this.service.getProducts();
    response.subscribe(data => this.products = data);
  }
}
