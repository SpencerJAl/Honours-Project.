import { Component, OnInit } from '@angular/core';
import { head } from '../../models/header';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss']
})
export class BorrowComponent implements OnInit {

  details: head = {
    id: 1,
    matriculaiton: "00000001",
    name: "Guest"
  }
  constructor() { }

  ngOnInit() {
    }
  }
