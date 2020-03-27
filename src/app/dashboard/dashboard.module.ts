import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AvatarModule} from 'ngx-avatar';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserInfoComponent,
    AppbarComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    TranslateModule,
    RouterModule,
    AvatarModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
