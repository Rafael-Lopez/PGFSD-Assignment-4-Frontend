import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: any;
  filteredProducts: any;

  constructor(private service: RestApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts = () => {
    this.service.getProducts()
      .subscribe(data => {
        this.products = data;
        this.filteredProducts = data;
      });
  }

  resetProducts = () => {
    this.filteredProducts = this.products;
  }

  onFilteredProducts = (filteredProducts: any) => {
    this.filteredProducts = filteredProducts;
  }
}
