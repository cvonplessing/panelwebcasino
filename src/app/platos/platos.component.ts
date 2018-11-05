import { Component, OnInit } from '@angular/core';
import { Plato } from '../models_/plato';
import { Casino } from '../models_/casino';
@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  defaultCasino: Casino = new Casino(0, 'Ombligo');
  toggle : boolean = false;
  // hardcode
  platos: Plato[] = [
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

  constructor() { }

  ngOnInit() {

  }

  onEditar(): void {
    this.toggle = !this.toggle;
  }
}
