import {Component, Input, OnInit} from '@angular/core';
import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import {Product} from '../../../models/Product';
import {RestApiService} from '../../../rest-api.service';
import {CartService} from '../../../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() showAddToCartButton: boolean;
  @Input() showDeleteButton: boolean;
  @Input() deleteProductCallback: () => void;
  faCoffee = faUtensils;

  constructor(private restApiService: RestApiService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  addProductToCart(): void {
    this.cartService.addProduct(this.product);
  }

  deleteProduct(productId: number): void {
    this.restApiService.deleteProduct(productId)
      .subscribe(data => {
          this.deleteProductCallback();
        },
        error => alert('Error while deleting!'));
  }
}
