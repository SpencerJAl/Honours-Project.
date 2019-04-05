import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   title ="login";
   details:Login[];

  constructor(){

  }

  ngOnInit() {
    this.details=[
      {
      Matriculaiton : "00000001",
      Password : "Password123",

      },
    ]
    
  }

}
