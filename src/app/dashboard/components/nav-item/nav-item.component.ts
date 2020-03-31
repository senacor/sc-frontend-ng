import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav-item',
    template: `
        <a mat-list-item routerLink={{routerLink}}>
            <mat-icon class="icon">{{iconType}}</mat-icon>
            <ng-content></ng-content>
        </a>
    `,
    styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

    @Input() iconType: string;
    @Input() routerLink: string;

    constructor() { }

    ngOnInit(): void {
    }
}
