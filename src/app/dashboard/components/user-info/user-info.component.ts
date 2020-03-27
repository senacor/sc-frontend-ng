import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'userinfo',
    template: `
        <div class="userinfo-wrapper">
            <ngx-avatar class="avatar" src="photo" name="{{firstName + ' ' + lastName}}" size=60></ngx-avatar>
            <p>{{lastName + ', ' + firstName}}</p>
        </div>
    `,
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

    photo: string;
    firstName = "Michaela";
    lastName = "Mitarbeiterin";

    constructor() { }

    ngOnInit(): void {
    }
}