/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule }       from './core/core.module';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

////////  SPECS  /////////////
describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [
       CoreModule,
       AppRoutingModule
     ],
     declarations: [ AppComponent ],
     providers: [ {provide: APP_BASE_HREF, useValue : '/' } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should pass', () => expect(true).toBe(true));

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Angular Modules/i,
      '<h1> should say something about "Angular Modules"');
  });

  it('should change subtitle', () =>{
    comp.subtitle = 'test-title';
    fixture.detectChanges();
    expect(de.nativeElement.innerText).toContain('test-title',
        '<h1> should change its subtitle if needed')
  });


});
