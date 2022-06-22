import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService { 
//  devo dichiarare variabili prima di constructor
  value: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { } 

  fahreneitValue(): Observable<number> {
    return this.value.pipe( 
      map(v => v * 1.8 + 32), 
      map(v => this.round(v))
    )
  } 

  kelvinValue(): Observable<number> {
    return this.value.pipe( 
      map(v => v + 273.15), 
      map(v => this.round(v))
    )
  } 

  nextFahreneit(fValue: number): void{ 
    const newValue = (fValue - 32) * 1.8;  
    const rounded = this.round(newValue);
    this.value.next(rounded);
  } 

  nextKelvin(kValue: number): void{ 
    const newValue = kValue - 273.15; 
    const rounded = this.round(newValue);
    this.value.next(rounded);
  } 

  round(value: number): number{ 
    return parseFloat(value.toFixed(2));
  }
}
