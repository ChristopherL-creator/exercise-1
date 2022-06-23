import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-celsius',
  templateUrl: './celsius.component.html',
  styleUrls: ['./celsius.component.scss']
})
export class CelsiusComponent implements OnInit { 

  //  devo dichiarare variabili prima di constructor
  value: number = 0;

// importo service a variabili
  constructor( private conServ: ConverterService ) { 
    conServ.value.subscribe({  
      //  con subscribe, si registra ad ogni cambiamento di value
      next: v => this.value = v, 
      // quando arriva value cambiata da service(v), l'assegno a value in component
      error: err => console.log(err)
    })
  }

  ngOnInit(): void {
  } 

  valueChanged(): void { 
    this.conServ.value.next(this.value);
//  value è cambiato, lo infiliamo in consservice, che cpmunica ad altri componenti
  }

}
