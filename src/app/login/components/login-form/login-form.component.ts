import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { LoginEvent } from '../../models/events';
import { ErrorStateMatcher } from '@angular/material/core';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login-form',
  template: `
  <form class="form" [formGroup]="loginForm" (ngSubmit)="handleSubmit()">
    <!-- Username input -->
    <mat-form-field class="formControl" appearance="standard">
      <mat-icon matPrefix>perm_identity</mat-icon>
      <input matInput
        placeholder="{{'login.username' | translate }}"
        formControlName="username"
        [errorStateMatcher]="errorStateMatcher"/>
    </mat-form-field>
    <!-- Password input -->
    <mat-form-field class="formControl" appearance="standard">
      <mat-icon matPrefix>lock</mat-icon>
      <input matInput
        placeholder="{{'login.password' | translate }}"
        formControlName="password"
        type="password"
        [errorStateMatcher]="errorStateMatcher"/>
      <mat-error>{{ 'login.invalid' | translate }}</mat-error>
    </mat-form-field>
    <!-- Submit button -->
    <button mat-raised-button class="button" color="primary" type="submit">{{ 'login.login' | translate | uppercase }}</button>
  </form>
  `,
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input()
  private hasError = false;

  @Output()
  login = new EventEmitter<LoginEvent>();

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  errorStateMatcher: ErrorStateMatcher = {
    isErrorState: () => this.hasError
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.login.emit(this.loginForm.value);
  }
}
