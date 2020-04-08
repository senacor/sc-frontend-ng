import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyScsComponent } from './components/my-scs/my-scs.component';

const routes: Routes = [
    {
        path: '',
        component: MyScsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyScsRoutingModule { }
