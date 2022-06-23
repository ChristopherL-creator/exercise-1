import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-fahrenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.scss']
})
export class FahrenheitComponent implements OnInit {

//  devo dichiarare variabili prima di constructor
  // value: number = 0;

// importo service a variabili
  constructor( public conServ: ConverterService ) { 
    // conServ.fahreneitValue().subscribe({  
    //   //  con subscribe, si registra ad ogni cambiamento di value
    //   next: v => this.value = v, 
    //   // quando arriva value cambiata da service, l'assegno a value in component
    //   error: err => console.log(err)
    // })
  }

  ngOnInit(): void {
  } 

//   valueChanged(): void { 
//     this.conServ.nextFahreneit(this.value);
// //  value è cambiato, lo infiliamo in consservice, che cpmunica ad altri componenti
//   }

}
