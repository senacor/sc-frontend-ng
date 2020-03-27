import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    sidenavMode: string;
    sidenavOpened: boolean;

    constructor(public breakpointObserver: BreakpointObserver) {
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
