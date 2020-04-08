import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyScsComponent } from './components/my-scs/my-scs.component';
import { MyScsRoutingModule } from './my-scs-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ScCardComponent } from './components/sc-card/sc-card.component';
import { MapGeneralStatusPipe } from '../../utils/CustomPipes';



@NgModule({
  declarations: [MyScsComponent, ScCardComponent, MapGeneralStatusPipe],
  imports: [
    CommonModule,
    TranslateModule,
    MyScsRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class MyScsModule { }
