import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localdata',
  templateUrl: './localdata.component.html',
  styleUrls: ['./localdata.component.css']
})
export class LocaldataComponent implements OnInit {
  customerid:any;
  constructor() {
    this.customerid='';
   }
  ngOnInit(): void {
  }
}