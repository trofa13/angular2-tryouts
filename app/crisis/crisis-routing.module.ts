import { NgModule }            from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { CanActivateViaAuthGuard } from '../shared/can-activate-route.guard';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: CrisisListComponent },
    { path: ':id', component: CrisisDetailComponent, canActivate: [ CanActivateViaAuthGuard ] }
];

@NgModule({
    providers: [ CanActivateViaAuthGuard ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrisisRoutingModule {}
