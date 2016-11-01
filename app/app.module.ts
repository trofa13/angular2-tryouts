import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContactModule } from './contact/contact.module';
/*Components*/
import { AppComponent }  from './app.component';
import { TitleComponent } from './title.component';

/*Directives*/
import { HighlightDirective } from './highlight.directive';

/*Services*/
import { UserService } from './user.service';

@NgModule({
    imports: [ BrowserModule, ContactModule],
    declarations: [
        AppComponent,
        HighlightDirective,
        TitleComponent
    ],
    providers: [ UserService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
