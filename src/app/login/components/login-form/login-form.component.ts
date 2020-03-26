import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginEvent } from '../../models/events';


@Component({
  selector: 'app-login-form',
  template: `
  <form class="form" [formGroup]="loginForm" (ngSubmit)="handleSubmit()">
    <!-- Username input -->
    <mat-form-field class="formControl" appearance="standard">
      <mat-icon matPrefix>perm_identity</mat-icon>
      <input matInput placeholder="{{'login.username' | translate }}" formControlName="username"/>
    </mat-form-field>
    <!-- Password input -->
    <mat-form-field class="formControl" appearance="standard">
      <mat-icon matPrefix>lock</mat-icon>
      <input matInput placeholder="{{'login.password' | translate }}" formControlName="password" type="password"/>
    </mat-form-field>
    <!-- Submit button -->
    <button mat-raised-button class="button" color="primary" type="submit">{{ 'login.login' | translate | uppercase }}</button>
  </form>
  `,
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Output()
  login = new EventEmitter<LoginEvent>();

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.login.emit(this.loginForm.value);
  }
}
