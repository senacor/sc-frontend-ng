import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Feedback, FeedbackContext } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  sendFeedback(data: { subject: string, message: string, email: string }): Observable<HttpResponse<any>> {
    return this.http.post(
      environment.baseUrl + '/api/v1/feedback/login',
      new Feedback(data.subject, data.message, data.email, FeedbackContext.BUG),
      {observe: 'response'});
  }
}
