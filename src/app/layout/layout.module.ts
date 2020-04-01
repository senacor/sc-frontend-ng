import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarModule} from 'ngx-avatar';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { LayoutComponent } from './components/layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
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
    AvatarModule,
    LayoutRoutingModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
