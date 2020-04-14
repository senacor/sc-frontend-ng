import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'ngx-avatar';
import { ScDetailComponent } from './components/sc-detail/sc-detail.component';
import { ScSheetRoutingModule } from './sc-sheet-routing.module';
import { ScSheetComponent } from './components/sc-sheet/sc-sheet.component';
import { ScStatusStepperComponent } from './components/sc-status-stepper/sc-status-stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DetermineGeneralStatusPipe, MapToHintPipe } from '../../utils/CustomPipes';

@NgModule({
  declarations: [
    ScDetailComponent,
    ScSheetComponent,
    ScStatusStepperComponent,
    DetermineGeneralStatusPipe,
    MapToHintPipe
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    AvatarModule,
    ScSheetRoutingModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ScSheetModule { }
