import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Feedback } from '../models/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) {
  }

  sendFeedback(feedback: Feedback): Observable<HttpResponse<any>> {
    return this.http.post(environment.backendUrl + '/api/v1/feedback/login', feedback, {observe: 'response'});
  }
}
