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
              Scorecard ohne PR Dimensionen
              <br>
              Fälligkeit: 23.03.2020, Abteilung: , Einstufung: Expert
              <br>
              Vorgesetzter: Vorgesetzter, Volker; Beurteiler: Vorgesetzter, Volker
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
