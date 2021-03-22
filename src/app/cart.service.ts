import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject([]);
  sharedCart = this.cart.asObservable();

  constructor() { }

  addProduct = (product: Product) => {
    const currentProducts = this.cart.getValue();
    this.cart.next([...currentProducts, product]);
  }

  clearCart = () => {
    this.cart.next([]);
  }
}
