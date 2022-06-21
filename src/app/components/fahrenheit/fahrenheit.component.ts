import { Component, OnInit } from '@angular/core';
import { ConversionService } from 'src/app/services/conversion.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {

  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
