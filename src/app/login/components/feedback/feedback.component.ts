import { Component, OnInit } from '@angular/core';

import {FeedbackService} from '../../services/feedback.service';

@Component({
  selector: 'app-feedback',
  template: `
  `
})
export class FeedbackComponent implements OnInit {

  constructor(
    private feedbackService: FeedbackService
  ) { }

  ngOnInit(): void {
  }

}
