import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-detail',
  template: `
    <mat-card class="card">
      <div class="container">
        <ngx-avatar textSizeRatio="2" src="photo" name="{{'Michaela Mitarbeiterin'}}" size=40></ngx-avatar>
        <div class="row">
          <div class="name">
            <p>
              Mitarbeiterin, Michaela
            </p>
          </div>
          <div class="info">
            <p>
              {{ 'scsheet.sctype.withPR' | translate }}
              <br>
              {{ 'scdetailinformation.duedate' | translate }} 23.03.2020,
              {{ 'scdetailinformation.department' | translate }} Mocked departement,
              {{ 'scdetailinformation.classification' | translate }} Mocked classification
              <br>
              {{ 'employeeInfo.supervisor' | translate }}: Vorgesetzter, Volker;
              {{ 'sc.reviewer' | translate }} Vorgesetzter, Volker
            </p>
          </div>
        </div>
      </div>
    </mat-card>
  `,
  styleUrls: ['./scDetail.component.css']
})
export class ScDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
