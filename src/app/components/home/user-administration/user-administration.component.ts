import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestApiService} from '../../../rest-api.service';
import {SharedService} from '../../../shared.service';

@Component({
  selector: 'app-user-administration',
  templateUrl: './user-administration.component.html',
  styleUrls: ['./user-administration.component.scss']
})
export class UserAdministrationComponent implements OnInit {
  changePasswordForm = new FormGroup({
    password: new FormControl('')
  });

  authenticatedUser: any;

  constructor( private service: RestApiService,
               private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.sharedService.sharedAuthenticatedUser.subscribe(authenticatedUser => this.authenticatedUser = authenticatedUser);
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
