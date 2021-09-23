import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  companyDetails:any;
  constructor() { 
    this.companyDetails= {
      name:'DBS',
      logo:"https://miro.medium.com/max/1024/0*IcRywGBc7fMYbb2A.png"
  }
  }

  ngOnInit(): void {
  }

}
