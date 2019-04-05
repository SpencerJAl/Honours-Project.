import { Component, OnInit } from '@angular/core';
import { head } from '../../models/header';
@Component({
  selector: 'app-loaned',
  templateUrl: './loaned.component.html',
  styleUrls: ['./loaned.component.scss']
})
export class LoanedComponent implements OnInit {

  details: head = {
    id: 1,
    matriculaiton: "00000001",
    name: "Guest"
  }
  constructor() { }

  ngOnInit() {

    }
  }
