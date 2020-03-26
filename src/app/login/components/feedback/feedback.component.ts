import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { FeedbackService } from '../../services/feedback.service';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';
import { FeedbackSuccessDialogComponent } from '../feedback-success-dialog/feedback-success-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-feedback',
  template: `
      <div>
          <a (click)="openFeedbackDialog()">{{'login.feedback' | translate}}</a>
      </div>
  `,
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackDialogRef: MatDialogRef<FeedbackDialogComponent>;

  constructor(
    private feedbackService: FeedbackService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  openFeedbackDialog(): void {
    this.feedbackDialogRef = this.dialog.open(FeedbackDialogComponent, {
      autoFocus: false
    });

    this.processFeedback();
  }

  processFeedback(): void {
    this.feedbackDialogRef.componentInstance.feedback.subscribe(data => {
      this.feedbackService.sendFeedback(data).subscribe(
        response => {
          if (response.status === 201) {
            this.dialog.open(FeedbackSuccessDialogComponent);
          } else {
            this.dialog.open(ErrorDialogComponent);
          }
        },
        error => {
          console.error(error);
          this.dialog.open(ErrorDialogComponent);
        }
      );
    });
  }

}
