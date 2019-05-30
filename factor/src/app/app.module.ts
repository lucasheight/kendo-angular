import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FactorDirective } from './factor.directive';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    FactorDirective
  ],
  imports: [
    BrowserModule,
    InputsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
