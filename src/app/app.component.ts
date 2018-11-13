import { Component } from '@angular/core';
import { Plato } from './models_/plato';
import { Casino } from './models_/casino';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle: boolean =false;
  title = 'Administración Casinos Udec';
  defaultCasino: Casino = new Casino(0, 'Ombligo');
  onLogin(){
    this.toggle = !this.toggle;
  }
}
