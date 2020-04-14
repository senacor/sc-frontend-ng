import { Component, Input, OnInit } from '@angular/core';
import { mockedResponse } from '../../../../mockdata/myScs';

@Component({
  selector: 'app-own-sc',
  template: `
    <div class="my-scs-container">
      <app-sc-card *ngFor="let card of cards" [mycard]="card"></app-sc-card>
    </div>`,
  styleUrls: ['./my-scs.component.css']
})
export class MyScsComponent implements OnInit {

  //TODO: exchange mockedResponse with real service call
  cards = mockedResponse.scs;
  constructor() {
  }

  ngOnInit(): void {
  }

}
