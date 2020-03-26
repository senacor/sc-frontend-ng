import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './components/login/login.component';
import { LogoComponent } from './components/logo/logo.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VersionDialogComponent } from './components/version-dialog/version-dialog.component';
import { FeedbackDialogComponent } from './components/feedback-dialog/feedback-dialog.component';
import { FeedbackSuccessDialogComponent } from './components/feedback-success-dialog/feedback-success-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LogoComponent,
    FeedbackComponent,
    VersionDialogComponent,
    FeedbackDialogComponent,
    FeedbackSuccessDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    TranslateModule
  ],
  entryComponents: [
    VersionDialogComponent,
    FeedbackDialogComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
