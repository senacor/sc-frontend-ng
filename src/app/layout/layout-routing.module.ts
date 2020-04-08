import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(mod => mod.DashboardModule) },
            { path: 'myScs', loadChildren: () => import('../my-scs/my-scs.module').then(mod => mod.MyScsModule) },
            { path: 'scDetail', loadChildren: () => import('../scSheet/scSheet.module').then(mod => mod.ScSheetModule) },
            // put here other routings for new modules, for example /mySc, /activeEmployees, /formerEmployees ...
        ]
    },
    {
        path: '',
        component: AppComponent,
        children: [
            { path: 'login', loadChildren: () => import('../login/login.module').then(mod => mod.LoginModule) }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
