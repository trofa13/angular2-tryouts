import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisService }          from './crisis.service';
import { AuthService } from '../shared/auth.service';
import { CrisisRoutingModule }    from './crisis-routing.module';

@NgModule({
    imports:      [ CommonModule, CrisisRoutingModule ],
    declarations: [ CrisisDetailComponent, CrisisListComponent ],
    providers:    [ CrisisService, AuthService ]
})
export class CrisisModule {}
