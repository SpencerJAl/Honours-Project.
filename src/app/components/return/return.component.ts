import { Component, OnInit } from '@angular/core';
import { head } from '../../models/header';
@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit {
 
  details: head = {
    id: 1,
    matriculaiton: "00000001",
    name: "Guest"
  }
  constructor() { }

  ngOnInit() {

    }
  }
