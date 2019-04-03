import { Component, OnInit } from '@angular/core';
import { Loan } from '../../models/loans';
//import { CheckboxModule } from 'primgeng/checkbox';
@Component({
  selector: 'app-return-module',
  templateUrl: './return-module.component.html',
  styleUrls: ['./return-module.component.scss']
})
export class ReturnModuleComponent implements OnInit {

  loans:Loan[];

  constructor() { }

  ngOnInit() {

this.loans=[
  {
    id : 1,
    title : 'UX Design',
    date : '15/04/19',
    fine : 'No Fine'
  },
  {
    id : 2,
    title : 'Python Programing',
    date : '13/04/19',
    fine : 'No Fine' 
  },
  {
    id : 3,
    title : 'Pandas in the wild',
    date : '09/02/19',
    fine : '£5'
  },
]
  }

}