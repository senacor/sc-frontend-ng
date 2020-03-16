import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {MockComponent} from 'ng-mocks';
import Spy = jasmine.Spy;

import {LoginFormComponent} from '../login-form/login-form.component';
import {AuthService} from '../../services/auth.service';
import {LoginComponent} from './login.component';
import {LogoComponent} from '../logo/logo.component';
import {FeedbackComponent} from '../feedback/feedback.component';


describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let loginSpy: Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
        MockComponent(LoginFormComponent),
        MockComponent(LogoComponent),
        MockComponent(FeedbackComponent)
      ],
      providers: [ AuthService ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    debugElement = fixture.debugElement;

    const authService = debugElement.injector.get(AuthService);
    loginSpy = spyOn(authService, 'login');
  }));

  it('"login" event should trigger login', () => {
    const loginEvent = {
      username: 'username',
      password: 'password'
    };
    const loginFormComponent = fixture.debugElement.query(By.directive(LoginFormComponent));
    loginFormComponent.triggerEventHandler('login', loginEvent);

    expect(loginSpy).toHaveBeenCalledWith(loginEvent.username, loginEvent.password);
  });
});
