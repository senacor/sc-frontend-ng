import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

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

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openFeedbackDialog(): void {
    this.dialog.open(FeedbackDialogComponent, {
      autoFocus: false
    });
  }

}
