import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversionService {

  value = new BehaviorSubject<number>(0);

  constructor() { }

  toKelvin(value: number): number {
    return value + 273.15;
  }

  toFahrenheit(value: number): number {
    return value * 1.8 + 32;
  }

}
