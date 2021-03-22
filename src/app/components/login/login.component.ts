import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestApiService} from '../../rest-api.service';
import {UserAuthenticationService} from '../../user-authentication.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  authenticatedUser: any;

  constructor( private service: RestApiService,
               private userAuthenticationService: UserAuthenticationService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.userAuthenticationService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);

    if (this.authenticatedUser) {
      this.router.navigate(['/home']);
    }
  }

  doLogin(): void {
    const response = this.service.login(this.username, this.password);
    response.subscribe( data => {
      this.userAuthenticationService.nextAuthenticatedUser(data ? data.principal : null);
      this.router.navigate(['/home']);
    } , error => {
        alert('Wrong credentials!');
      });
  }

}
