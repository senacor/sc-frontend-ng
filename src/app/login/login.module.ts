import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { LogoComponent } from './components/logo/logo.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { FeedbackSuccessDialogComponent } from './components/feedback-success-dialog/feedback-success-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { VersionDialogComponent } from './components/version-dialog/version-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoComponent,
    FeedbackComponent,
    FeedbackDialogComponent,
    FeedbackFormComponent,
    FeedbackSuccessDialogComponent,
    ErrorDialogComponent,
    VersionDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
