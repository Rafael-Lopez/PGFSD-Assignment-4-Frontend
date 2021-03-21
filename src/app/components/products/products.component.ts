import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any;
  @Input() showAddToCartButton = true;
  @Input() showDeleteButton = false;
  @Input() deleteProductCallback: () => void;

  constructor() { }

  ngOnInit(): void {
  }
}
