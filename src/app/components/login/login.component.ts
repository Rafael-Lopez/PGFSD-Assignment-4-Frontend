import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {RestApiService} from '../../rest-api.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username: string;
  password: string;
  message: any;

  constructor(private service: RestApiService, private router: Router) {
  }

  doLogin(): void {
    const response = this.service.login(this.username, this.password);
    response.subscribe( data => {
      this.message = data;
      this.router.navigate(['/home']);
    });
  }

}
