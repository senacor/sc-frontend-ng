import { Component, OnInit } from '@angular/core';

import {LoginEvent} from '../../models/events';
import {AuthService} from '../../services/auth.service';

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
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {}

  handleLogin(event: LoginEvent) {
    this.authService.login(event.username, event.password);
  }
}
