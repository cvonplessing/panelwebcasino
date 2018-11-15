import { Component, OnInit } from '@angular/core';

import {PlatosService} from '../services_/platos.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  // hardcode

  public currentPlatos: any[];
  public defaultPlatos: any = [
    {
      idPlato: 1,
      nombrePlato: 'Frito de acelga coliflor con puré mixto',
      tipoPlato: 'Junaeb',
      agregadoPlato: 'Postre y ensalada/sopa'

    },
    {
      idPlato: 2,
      nombrePlato: 'Pizza Hawaiana',
      tipoPlato: 'Pizza',
      agregadoPlato: 'Postre y ensalada/sopa'
    },
    {
      idPlato: 3,
      nombrePlato: 'Bowl pollo con arroz',
      tipoPlato: 'Bowl',
      agregadoPlato: 'Postre y ensalda/sopa'
    }
  ];
  private userEmail: string;
  public cDate: any;
  public inputDate: any;
  constructor(private service: PlatosService) {

    /*
    this.http.get('http://localhost:3000/queries/*').subscribe(response => {
      // console.log(response);

      this.defaultPlatos = response;
    });

    */
  }

  ngOnInit() {
    this.service.cast.subscribe(user => this.userEmail);
    /*
    this.service.getCasinos().subscribe(response => {
      console.log(response);
      // this.defaultPlatos = response;

    });
    */
  }

  getTodayPlatos(inputDate) {
    this.service.getTodayPlatos(inputDate).subscribe(response => {
      // asignar respuesta a currentPlatos
      // this.currentPlatos = response;
      console.log(response);
      // console.log(inputDate)
    });
  }

  loli(lol: any) {
     console.log(lol);
  }
}
