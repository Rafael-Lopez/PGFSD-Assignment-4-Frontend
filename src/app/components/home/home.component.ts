import { Component, OnInit } from '@angular/core';
import {RestApiService} from '../../rest-api.service';
import {SharedService} from '../../shared.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  authenticatedUser: any;
  username: string;
  password: string;

  constructor( private service: RestApiService,
               private sharedService: SharedService,
               private router: Router) {
  }

  ngOnInit(): void {
    this.sharedService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);

    if (!this.authenticatedUser) {
      this.router.navigate(['/login']);
    }
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
