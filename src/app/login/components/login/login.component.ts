import { Component, OnInit } from '@angular/core';

import {LoginEvent} from '../../models/events';
import {AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="login-wrapper">
      <div class="login-sidebar">
        <div class="login">
          <app-logo></app-logo>
          <app-login-form (login)="handleLogin($event)"></app-login-form>
          <app-feedback></app-feedback>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private redirectUrl = '/';

  constructor(private authService: AuthService, private router: Router) {
    this.redirectUrl = this.router.getCurrentNavigation().extras.state?.returnUrl || '/';
  }

  ngOnInit(): void { }

  handleLogin(event: LoginEvent) {
    this.authService.login(event).subscribe(response => {
      if (this.authService.isLoggedIn()) {
        this.router.navigate([this.redirectUrl]);
      } else {
        alert('Error');
      }
    });
  }
}
