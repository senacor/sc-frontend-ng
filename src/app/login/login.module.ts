import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';

import {TranslateModule} from '@ngx-translate/core';

import {LoginComponent} from './components/login/login.component';
import {LogoComponent} from './components/logo/logo.component';
import {FeedbackComponent} from './components/feedback/feedback.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    TranslateModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
