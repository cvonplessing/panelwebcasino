import { Component, OnInit } from '@angular/core';
import { LoginService} from '../services_/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: LoginService) { }

  ngOnInit() {
  }

  logIn(username, gpassword) {
    // event.preventDefault();
    // const target = event.target;
    // console.log(event);
    console.log(username, gpassword);
  }


}
