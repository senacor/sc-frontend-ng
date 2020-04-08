import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-sc-card',
  template: `
    <div class="card-container" routerLink={{card.scId}} routerLinkActive="active">
      <mat-card class="card">
        <div class="card-header">
          <mat-card-title>
            <div><p>Bewertungszeitraum</p>
              <p>{{card.periodName}}</p></div>
          </mat-card-title>
        </div>
        <mat-card-content class="card-content">
          <mat-icon aria-hidden="false" class="card-icon">assessment</mat-icon>
          <p>Start: {{card.createdDate | date:"dd.MM.yyyy"}}</p>
          <p>Fälligkeit: {{card.deadline | date:"dd.MM.yyyy"}}</p>
        </mat-card-content>
        <div class="card-footer">
          <mat-card-footer class="card-footer-title">{{card.scStatus | mapGeneralStatus | translate}}</mat-card-footer>
        </div>
      </mat-card>
    </div>`,
  styleUrls: ['./sc-card.component.css']
})
export class ScCardComponent implements OnInit {

  @Input('mycard') card;

  constructor() {
  }

  ngOnInit(): void {
  }

}
