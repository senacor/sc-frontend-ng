import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { AvatarModule } from 'ngx-avatar';
import { ScDetailComponent } from './components/scDetail/scDetail.component';
import { ScSheetRoutingModule } from './scSheet-routing.module';
import { ScSheetComponent } from './components/scSheet/scSheet.component';

@NgModule({
  declarations: [
    ScDetailComponent,
    ScSheetComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatCardModule,
    MatGridListModule,
    AvatarModule,
    ScSheetRoutingModule
  ]
})
export class ScSheetModule { }
