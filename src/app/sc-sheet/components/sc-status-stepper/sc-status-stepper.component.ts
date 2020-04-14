import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { GENERAL_STATUS, USER_SC_RELATION } from '../../../../utils/Constants';
import { mockedResponseSc } from '../../../../mockdata/sc';
import { DetermineGeneralStatusPipe } from '../../../../utils/CustomPipes';

@Component({
  selector: 'app-sc-status-stepper',
  template: `
    <mat-card class="card">
      <div *ngIf="currentStepIndex > -1">
        <mat-horizontal-stepper labelPosition="bottom" #stepper>
          <mat-step *ngFor="let step of statusSteps; index as i"
                    [label]="step.labelId | translate"
                    [completed]="i < currentStepIndex"
                    [editable]="false">
          </mat-step>
        </mat-horizontal-stepper>
        <p class="status-description">{{statusSteps[currentStepIndex].name | mapToHint: user | translate}}</p>
      </div>
      <div *ngIf="currentStepIndex === -1">
        <h2 class="archived-title">Scorecard is archiviert</h2>
      </div>
    </mat-card>
  `,
  styleUrls: ['./sc-status-stepper.component.css'],
  providers: [DetermineGeneralStatusPipe]
})
export class ScStatusStepperComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;

  //TODO: use real data
  @Input() sc = mockedResponseSc;

  //TODO: transform into valid input - user relation should be calculated based on session and SC
  @Input() user = USER_SC_RELATION.OWNER;

  currentStepIndex = 0;

  statusSteps = [
    { name: GENERAL_STATUS.INITIALIZATION, labelId: 'sc.phase.preparation', index: 0 },
    { name: GENERAL_STATUS.IN_PROGRESS, labelId: 'sc.phase.inProgress', index: 1 },
    { name: GENERAL_STATUS.READY_TO_CLOSE, labelId: 'sc.phase.ready', index: 2 },
    { name: GENERAL_STATUS.DONE, labelId: 'sc.phase.closed', index: 3 }
  ];

  constructor(private determineGeneralStatus: DetermineGeneralStatusPipe) {
  }

  ngOnInit(): void {
    const currentStatusEnum = this.determineGeneralStatus.transform(this.sc);
    this.currentStepIndex = currentStatusEnum === GENERAL_STATUS.ARCHIVED ? -1 : this.statusSteps.find(a => currentStatusEnum === a.name).index;
  }

  ngAfterViewInit() {
    this.stepper.selectedIndex = this.currentStepIndex;
  }

}
