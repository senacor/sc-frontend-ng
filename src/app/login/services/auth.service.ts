import { Injectable } from '@angular/core';
import { LoginEvent } from '../models/events';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !== null;
  }

  login(credentials: LoginEvent): Observable<any> {
    return this.httpClient
      .post(`${environment.backendUrl}/api/v1/oauth2/token`, credentials)
      .pipe(map(response => {
        this.saveTokens(response);
        return response;
      }));
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
