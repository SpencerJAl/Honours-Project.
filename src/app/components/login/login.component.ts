import { Component, OnInit } from '@angular/core';
//import { ToastModule } from 'primeng/toast';
//import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   title ="login";
   
  constructor(//private messageService: MessageService//
    ) { }
 //if(userID =="00000001" && password=="password"){
 // addSingle() {
  //  this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
//}

//  addBad(){
 //   this.messageService.add({severity:'warn', summary:'Login failed please try again', detail:'Via MessageService'});
 // }

 //}

  ngOnInit() {
  }

}
