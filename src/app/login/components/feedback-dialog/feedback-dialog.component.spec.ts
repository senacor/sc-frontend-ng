import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';
import Spy = jasmine.Spy;

import { Feedback, FeedbackContext } from '../../models/feedback.model';
import { FeedbackDialogComponent } from './feedback-dialog.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { FeedbackService } from '../../services/feedback.service';
import { FeedbackSuccessDialogComponent } from '../feedback-success-dialog/feedback-success-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

describe('FeedbackDialogComponent', () => {
  let fixture: ComponentFixture<FeedbackDialogComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeedbackDialogComponent,
        MockComponent(FeedbackFormComponent)
      ],
      imports: [MatDialogModule, HttpClientTestingModule],
    }).compileComponents();


    fixture = TestBed.createComponent(FeedbackDialogComponent);
    debugElement = fixture.debugElement;

  }));

  it('"feedback" event should trigger handleSubmit and open FeedbackSuccessDialogComponent', () => {
    const feedback: Feedback = {subject: 'testSubject', body: 'testBody', email: 'test@email.com', context: FeedbackContext.BUG};
    const feedbackFormComponent = fixture.debugElement.query(By.directive(FeedbackFormComponent));

    const feedbackService = TestBed.inject(FeedbackService);
    const dialog = TestBed.inject(MatDialog);

    const dialogSpy: Spy = spyOn(dialog, 'open');
    const feedbackSpy: Spy = spyOn(feedbackService, 'sendFeedback')
      .and.returnValue(of(new HttpResponse({ status: 201, statusText: 'Created'})));

    feedbackFormComponent.triggerEventHandler('feedback', feedback);

    expect(feedbackSpy).toHaveBeenCalledWith(feedback);
    expect(dialogSpy).toHaveBeenCalledWith(FeedbackSuccessDialogComponent);
  });

  it('"feedback" event should trigger handleSubmit and open ErrorDialogComponent', () => {
    const feedback: Feedback = {subject: 'testSubject', body: 'testBody', email: 'test@email.com', context: FeedbackContext.BUG};
    const feedbackFormComponent = fixture.debugElement.query(By.directive(FeedbackFormComponent));

    const feedbackService = TestBed.inject(FeedbackService);
    const dialog = TestBed.inject(MatDialog);

    const dialogSpy: Spy = spyOn(dialog, 'open');
    const feedbackSpy: Spy = spyOn(feedbackService, 'sendFeedback')
      .and.returnValue(of(new HttpResponse({ status: 404, statusText: 'Not Found'})));

    feedbackFormComponent.triggerEventHandler('feedback', feedback);

    expect(feedbackSpy).toHaveBeenCalledWith(feedback);
    expect(dialogSpy).toHaveBeenCalledWith(ErrorDialogComponent);
  });
});
