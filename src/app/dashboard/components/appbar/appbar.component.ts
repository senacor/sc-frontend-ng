import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-appbar',
    template: `
        <mat-toolbar color="primary" class="appbar">
            <button [hidden]="!sidenavToggleButtonVisible" class="toggleButton" mat-icon-button (click)="sidenav.toggle()">
                <mat-icon>menu</mat-icon>
            </button>
            <h1>{{ 'appbar.appTitle' | translate }}</h1>
        </mat-toolbar>`,
    styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

    @Input() sidenav: MatSidenav;

    sidenavToggleButtonVisible: boolean;

    constructor(private breakpointObserver: BreakpointObserver) {
        breakpointObserver
            .observe('(min-width: 1280px)')
            .subscribe(result => {
                result.matches ? this.sidenavToggleButtonVisible = false : this.sidenavToggleButtonVisible = true;
            });
    }

    ngOnInit(): void { }
}
