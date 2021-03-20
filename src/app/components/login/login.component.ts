import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RestApiService} from '../../rest-api.service';
import {SharedService} from '../../shared.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  authenticatedUser: any;

  constructor( private service: RestApiService,
               private sharedService: SharedService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.sharedService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);

    if (this.authenticatedUser) {
      this.router.navigate(['/home']);
    }
  }

  doLogin(): void {
    const response = this.service.login(this.username, this.password);
    response.subscribe( data => {
      this.sharedService.nextAuthenticatedUser(data ? data.principal : null);
      this.router.navigate(['/home']);
    });
  }

}
