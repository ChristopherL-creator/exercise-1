import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { KelvinComponent } from './components/kelvin/kelvin.component';
import { FahrenheitComponent } from './components/fahrenheit/fahrenheit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    KelvinComponent,
    FahrenheitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
