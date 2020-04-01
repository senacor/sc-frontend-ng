import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }])
  ],
  exports: [
    DashboardComponent,
    RouterModule
  ]
})
export class DashboardModule { }
