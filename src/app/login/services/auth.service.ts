import { Injectable } from '@angular/core';
import { LoginEvent } from '../models/events';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  constructor(private httpClient: HttpClient) { }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.isLoggedIn() ? `Bearer ${localStorage.getItem('access_token')}` : ''
      }
    });

    return next.handle(request);
  }

  login(credentials: LoginEvent) {
    this.httpClient
      .post(`${environment.baseUrl}/api/v1/oauth2/token`, credentials, { observe: 'response' })
      .subscribe(response => {
        if (!window.sc_app_backend_version) {
          window.sc_app_backend_version = response.headers.get('backend_version');
        }
        if (response.ok) {
          this.saveTokens(response.body);
        } else {
          this.removeTokens();
        }
      });
  }

  logout() {
    this.removeTokens();
  }


  private saveTokens(data: any) {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  }
}
