import { Component, OnInit } from '@angular/core';
import { Casino } from '../models_/casino';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    defaultCasino: Casino = new Casino(0, 'Ombligo');
  constructor() { }

  ngOnInit() {
  }
}
