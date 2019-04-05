import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { head } from '../../models/header';
@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {
 
  details: head = {
    id: 1,
    matriculaiton: "00000001",
    name: "Guest"
  }
  constructor(private router: Router){}
  ngOnInit() {

    // do init at here for current route.

    setTimeout(() => {
        this.router.navigate(['borrow']);
    }, 3000);  //3s
  
      }
  }

