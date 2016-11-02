import { Component, OnInit } from '@angular/core';

import { Crisis, CrisisService }     from './crisis.service';
import { AuthService } from '../shared/auth.service';

@Component({
    template: `
    <h3 highlight>Crisis List</h3>
    <button type="button" (click)="login()">Логин</button>
    <button type="button" (click)="logout()">Логаут</button>
    <div *ngFor='let crisis of crisises | async'>
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
  `
})
export class CrisisListComponent implements OnInit {
    crisises: Promise<Crisis[]>;

    constructor(private crisisService: CrisisService, private authService:AuthService ) { }

    ngOnInit() {
        this.crisises = this.crisisService.getCrises();
    }

    login(){
        this.authService.login();
    }

    logout(){
        this.authService.logout();
    }
}
