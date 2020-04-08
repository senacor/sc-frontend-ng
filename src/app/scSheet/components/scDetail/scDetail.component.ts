import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sc-detail',
  template: `
    <mat-card>
      <mat-grid-list cols="12" rowHeight="1:2">
        <mat-grid-tile [colspan]="1">
          <ngx-avatar class="avatar" src="photo" name="{{'Michaela Mitarbeiterin'}}" size=60></ngx-avatar>
        </mat-grid-tile>
        <mat-grid-tile [colspan]="11">
          <div class="name">
            <p>
              Michaela Mitarbeiterin
            </p>
          </div>
          <div class="info">
            <p>
              Scorecard ohne PR Dimensionen
              <br>
              Fälligkeit: 23.03.2020, Abteilung: , Einstufung: Expert
              <br>
              Vorgesetzter: Vorgesetzter, Volker; Beurteiler: Vorgesetzter, Volker
            </p>
          </div>
        </mat-grid-tile>
      </mat-grid-list>
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
