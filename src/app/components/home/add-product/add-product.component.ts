import {Component, Input, OnInit} from '@angular/core';
import {RestApiService} from '../../../rest-api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from '../../../models/Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Input() addProductCallback: () => void;
  addProductForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0)
  });

  constructor(private service: RestApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addProduct(new Product(this.addProductForm.value.name, this.addProductForm.value.description, this.addProductForm.value.price));
    this.addProductForm.reset();
  }

  addProduct(product: Product): void {
    this.service.addProduct(product)
      .subscribe( data => {
        this.addProductCallback();
        alert('Product added!');
        },
        error => alert('Product could not be added!') );
  }
}
