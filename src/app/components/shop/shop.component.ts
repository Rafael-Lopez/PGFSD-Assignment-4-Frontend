import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any;

  constructor(private service: RestApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts = () => {
    const response = this.service.getProducts();
    response.subscribe(data => this.products = data);
  }

  onFilteredProducts = (filteredProducts: any) => {
    this.products = filteredProducts;
  }
}
