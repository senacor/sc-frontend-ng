import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'ngx-avatar';
import { ScDetailComponent } from './components/sc-detail/sc-detail.component';
import { ScSheetRoutingModule } from './sc-sheet-routing.module';
import { ScSheetComponent } from './components/sc-sheet/sc-sheet.component';
import { ButtonsBelowSheet } from './components/buttons-below-sheet/buttons-below-sheet.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ScDetailComponent,
    ScSheetComponent,
    ButtonsBelowSheet
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatIconModule,
    AvatarModule,
    ScSheetRoutingModule
  ]
})
export class ScSheetModule { }
