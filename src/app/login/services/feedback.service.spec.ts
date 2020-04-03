import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { environment } from '../../../environments/environment';
import { FeedbackService } from './feedback.service';
import { Feedback, FeedbackContext } from '../models/feedback.model';

describe('FeedbackService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let feedbackService: FeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbackService],
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    feedbackService = TestBed.inject(FeedbackService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should return 201 success', () => {
    const feedback: Feedback = {subject: 'testSubject', body: 'testBody', email: 'test@email.com', context: FeedbackContext.BUG};

    feedbackService.sendFeedback(feedback).subscribe(
      actualResponse => {
        expect(actualResponse.status).toEqual(201);
        expect(actualResponse.statusText).toEqual('Created');
      });

    const request = httpTestingController.expectOne(environment.backendUrl + '/api/v1/feedback/login');
    expect(request.request.method).toEqual('POST');
    expect(request.request.body).toEqual(feedback);

    const expectedResponse = new HttpResponse({ status: 201, statusText: 'Created' });
    request.event(expectedResponse);
  });

});
