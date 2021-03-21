import {Component, Input, OnInit} from '@angular/core';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  faCoffee = faUtensils;

  constructor() { }

  ngOnInit(): void {
  }

  addProductToCart(productId: number): void {
    console.log(productId);
  }
}
