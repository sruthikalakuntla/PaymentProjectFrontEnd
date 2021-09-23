import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  transactionsbyid:any;
  url:any;
  constructor(private http:HttpClient,private router: Router) {
    this.url="http://localhost:8081/transaction/"+localStorage.getItem("customerid");
   }

  ngOnInit(){
    let response= this.http.get(this.url);
    response.subscribe((data)=>this.transactionsbyid=data);
  }
  onSubmit() {
    this.router.navigate(['/dashboard'])  
  }

}
