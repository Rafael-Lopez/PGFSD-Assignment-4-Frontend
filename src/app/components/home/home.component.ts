import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  changePasswordForm = new FormGroup({
    password: new FormControl('')
  });

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

  onSubmit(): void {
    this.changePassword(this.changePasswordForm.value.password);
    this.changePasswordForm.reset();
  }

  changePassword(password: string): void {
    const response = this.service.changePassword(password);
    response.subscribe( data => {
      this.authenticatedUser.password = password;
      this.sharedService.nextAuthenticatedUser(this.authenticatedUser);
      alert('Password updated!');
    });
  }
}
