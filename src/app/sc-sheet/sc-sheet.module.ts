import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { AvatarModule } from 'ngx-avatar';
import { ScDetailComponent } from './components/sc-detail/sc-detail.component';
import { ScSheetRoutingModule } from './sc-sheet-routing.module';
import { ScSheetComponent } from './components/sc-sheet/sc-sheet.component';

@NgModule({
  declarations: [
    ScDetailComponent,
    ScSheetComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    AvatarModule,
    ScSheetRoutingModule
  ]
})
export class ScSheetModule { }
