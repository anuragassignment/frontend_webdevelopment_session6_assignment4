import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// imported FormsModule from angular forms library to use ngModel Directive in code
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Declared as import in NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
