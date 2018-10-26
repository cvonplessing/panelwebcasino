import { Component, OnInit } from '@angular/core';
import { Plato } from '../plato';
import { PLATOS } from '../mock-platos';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platos = PLATOS;
  selectedPlato: Plato;
  constructor() { }

  ngOnInit() {
  }
  onSelect(plato : Plato): void {
    this.selectedPlato = plato;

  }

}
