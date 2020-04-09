import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FeedbackService } from '../../services/feedback.service';
import { FeedbackSuccessDialogComponent } from '../feedback-success-dialog/feedback-success-dialog.component';
import { Feedback } from '../../models/feedback.model';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-feedback-dialog',
  template: `<app-feedback-form (feedback)="handleSubmit($event)"></app-feedback-form>`,
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private feedbackService: FeedbackService
  ) {
  }

  ngOnInit(): void {
  }

  handleSubmit(feedback: Feedback) {
    this.feedbackService.sendFeedback(feedback).subscribe(
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
  }

}
