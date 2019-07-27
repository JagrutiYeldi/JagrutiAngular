import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { Assign61Component } from './assign61/assign61.component';
//import { Assign6 } from './assign6.1/assign6.1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    Assign61Component
   // Assign6.1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
