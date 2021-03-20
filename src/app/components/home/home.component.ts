import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  authenticatedUser: any;
  products: any;

  constructor( private service: RestApiService,
               private sharedService: SharedService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.sharedService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);

    if (!this.authenticatedUser) {
      this.router.navigate(['/login']);
    }

    this.service.getProducts().subscribe(data => this.products = data);
  }
}
