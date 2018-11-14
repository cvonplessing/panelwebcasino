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

  private userEmail: string;

  constructor(private service: PlatosService) { }

  ngOnInit() {
    this.defaultCasino = this.Casinos[0].nombreCasino;
  }

  getCasinos(userEmail) {
    this.service.getCasinosPerUser(userEmail).subscribe(response => {
      // asignar respuestas a Casino;
      console.log(response);
    });
  }

  changeCasino(event) {
    this.defaultCasino = event.target.innerText;
    this.service.getPlatosPerCasino(this.userEmail, this.defaultCasino).subscribe(response => {
      // asignar respuestas al componente platos;
      console.log(response);
    });
  }

}
