import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-success-dialog',
  template: `
      <div>
          <mat-icon color="accent">check_circle_outline</mat-icon>
          <p mat-dialog-content>{{ 'message.feedbackloginCreated' | translate }}</p>
          <button mat-raised-button [mat-dialog-close]
                  color="accent">{{ 'feedbackcreatedialog.close' | translate | uppercase }}</button>
      </div>
  `,
  styleUrls: ['./feedback-success-dialog.component.css']
})
export class FeedbackSuccessDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
