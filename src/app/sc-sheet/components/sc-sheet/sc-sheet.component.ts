import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sc-sheet',
  template: `
    <app-sc-detail></app-sc-detail>
    <mat-tab-group color="accent" backgroundColor="accent" mat-stretch-tabs>
      <mat-tab label="{{ 'sctabs.my.data' | translate | uppercase }}">
        <mat-card>
          <!--"meine daten" components-->
        </mat-card>
      </mat-tab>
      <mat-tab label="{{ 'sctabs.summary' | translate | uppercase }}">
        <mat-card>
          <!--"zusammenfassung" components-->
        </mat-card>
      </mat-tab>
    </mat-tab-group>
    <!--final score + buttons bellow sheet-->
  `,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./sc-sheet.component.css']
})
export class ScSheetComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
