import { OnInit, Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-info',
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
    @Input() firstName = "Michaela";
    @Input() lastName = "Mitarbeiterin";

    constructor() { }

    ngOnInit(): void {
    }
}
