import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScSheetComponent } from './components/sc-sheet/sc-sheet.component';

const routes: Routes = [
  {
    path: ':id',
    component: ScSheetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScSheetRoutingModule { }
