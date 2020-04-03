import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: `
        <div class="dashboard-welcome-text">
            <h1>{{ 'dashboard.welcome' | translate }}</h1>
            <p>
                {{ 'dashboard.description.employee' | translate }}
                <br>
                {{ 'dashboard.subdescription' | translate }}
            </p>
        </div>
        <div>
            <p>cards go here!</p>
        </div>
    `,
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }
}
