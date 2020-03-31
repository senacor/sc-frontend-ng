import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-dashboard',
    template: `
        <div>
            <mat-sidenav-container autosize>
                <mat-sidenav #sidenav class="sidenav" attr.role="navigation" fixedInViewport [mode]="sidenavMode" [opened]="sidenavOpened">
                    <mat-toolbar class="toolbar">
                        <app-user-info class="userinfo"></app-user-info>
                    </mat-toolbar>
                    <mat-divider></mat-divider>
                    <mat-nav-list>
                        <app-nav-item iconType="dashboard" routerLink="/dashboard">Dashboard</app-nav-item>
                        <app-nav-item iconType="assessment" routerLink="/dashboard">Eigene Scorecards</app-nav-item>
                        <app-nav-item iconType="power_settings_new" routerLink="/login">Abmelden</app-nav-item>
                    </mat-nav-list>
                    <mat-divider></mat-divider>
                    <mat-nav-list class="feedback-navbar-item">
                        <app-nav-item iconType="feedback" routerLink="/login">Feedback</app-nav-item>
                    </mat-nav-list>
                </mat-sidenav>

                <mat-sidenav-content>
                    <app-appbar [sidenav]="sidenav"></app-appbar>
                    <router-outlet></router-outlet>
                </mat-sidenav-content>
            </mat-sidenav-container>
        </div>`,
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    sidenavMode: string;
    sidenavOpened: boolean;

    constructor(private breakpointObserver: BreakpointObserver) {
        breakpointObserver
            .observe('(min-width: 1280px)')
            .subscribe(result => {
                result.matches ? this.activateLargeScreenLayout() : this.activateHandsetLayout();
            });
    }

    ngOnInit(): void {
    }

    activateHandsetLayout() {
        this.sidenavMode = 'over';
        this.sidenavOpened = false;
    }

    activateLargeScreenLayout() {
        this.sidenavMode = 'side';
        this.sidenavOpened = true;
    }
}
