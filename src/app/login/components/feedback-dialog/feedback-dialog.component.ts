import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { FeedbackEvent } from '../../models/events';

@Component({
  selector: 'app-feedback-dialog',
  template: `
      <h2 mat-dialog-title>{{'feedbackcreatedialog.createfeedback' | translate}}</h2>
      <form mat-dialog-content [formGroup]="feedbackForm" (ngSubmit)="handleSubmit()">
          <p>{{'feedbackcreatedialog.logindescription' | translate}}</p>
          <mat-form-field appearance="outline">
              <mat-label>{{'feedbackcreatedialog.subject' | translate}}</mat-label>
              <input matInput formControlName="subject">
          </mat-form-field>
          <mat-form-field appearance="outline">
              <mat-label>{{'feedbackcreatedialog.message' | translate}}</mat-label>
              <textarea matInput [cdkTextareaAutosize]="false" rows="6" cols="120" formControlName="message"></textarea>
          </mat-form-field>
          <mat-form-field appearance="outline">
              <mat-label>{{'maintenance.email' | translate}}</mat-label>
              <input matInput formControlName="email" type="email"
                     pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required>
          </mat-form-field>
          <div>
              <button mat-raised-button [mat-dialog-close]
                      color="primary">{{ 'feedbackcreatedialog.close' | translate | uppercase }}</button>
              <button mat-raised-button [mat-dialog-close] type=submit color="accent" [disabled]="!feedbackForm.valid">
                  {{ 'feedbackcreatedialog.send' | translate | uppercase }}
              </button>
          </div>
      </form>
  `,
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  @Output()
  feedback = new EventEmitter<FeedbackEvent>();

  feedbackForm = this.fb.group({
    subject: [''],
    message: [''],
    email: ['']
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  handleSubmit() {
    this.feedback.emit(this.feedbackForm.value);
  }
}
