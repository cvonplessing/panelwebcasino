import { Component, OnInit } from '@angular/core';
import { Casino } from '../models_/casino';
import { PlatosService } from '../services_/platos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // defaultCasino: Casino = new Casino(0, 'Ombligo');
  // test para ver si funciona el index defaut

  defaultCasino: any;
 // hardcode
  public Casinos: any = [
    {
      idCasino: 0,
      nombreCasino: 'Ombligo'
    },
    {
      idCasino: 1,
      nombreCasino: 'Cafetería los patos'
    }
  ];

<<<<<<< HEAD
  constructor(private service: PlatosService) { }

  ngOnInit() {
    this.defaultCasino = this.Casinos[0];
=======
  private userEmail: any;
  // hardcodeado;

  constructor(private service: PlatosService) {
  }

  ngOnInit() {
    this.service.cast.subscribe(user => this.userEmail = user);
    this.defaultCasino = this.Casinos[0].nombreCasino;
>>>>>>> d2904baeda06c62c9ab7758132ed63d1d1b20699
  }

  getCasinos(userEmail) {
    this.service.getCasinosPerUser(userEmail).subscribe(response => {
      // asignar respuestas a Casino;
      console.log(response);
    });
  }


}
