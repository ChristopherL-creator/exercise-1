import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelsiusComponent } from './components/celsius/celsius.component';
import { FahrenheitComponent } from './components/fahrenheit/fahrenheit.component';
import { KelvinComponent } from './components/kelvin/kelvin.component';


@NgModule({
  declarations: [
    AppComponent,
    KelvinComponent,
    FahrenheitComponent,
    CelsiusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
