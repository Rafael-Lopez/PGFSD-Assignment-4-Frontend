import { Component, OnInit } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  check = faCheck;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectHome = () => {
    this.router.navigate(['/shop']);
  }
}
