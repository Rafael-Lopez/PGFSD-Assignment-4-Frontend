import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import {UserAuthenticationService} from '../../user-authentication.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  authenticatedUser: any;
  products: any;
  selection = 'administration';
  adminActive = 'active';
  productsActive  = '';
  addProductActive  = '';

  constructor( private service: RestApiService,
               private userAuthenticationService: UserAuthenticationService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.userAuthenticationService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);

    if (!this.authenticatedUser) {
      this.router.navigate(['/login']);
    }

    this.getProducts();
  }

  getProducts = () => {
    this.service.getProducts()
      .subscribe(data => this.products = data);
  }

  onSelection(selection: string): void {
    this.selection = selection;
    this.updateActiveElement(selection);
  }

  updateActiveElement(selection: string): void {
    this.adminActive = '';
    this.productsActive  = '';
    this.addProductActive  = '';

    switch (selection) {
      case 'administration':
        this.adminActive = 'active';
        break;
      case 'products':
        this.productsActive = 'active';
        break;
      case 'addProduct':
        this.addProductActive = 'active';
        break; }
  }
}
