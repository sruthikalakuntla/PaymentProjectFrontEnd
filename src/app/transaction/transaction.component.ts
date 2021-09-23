import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionobject:any;
  messagecode:Array<any>;
  transfertype:Array<any>;
  url:any;
  constructor(private router:Router,private http:HttpClient) { 
    this.transactionobject={
      "receiveraccountholdernumber": '',
      "receiveraccountholdername": '',  
      "receiverBIC":
                    {  "bic":''},
      "inramount": '',
      "customerid": 
                    {  "customerid": '' },
       
      "messagecode": {
          "messagecode": ''
          },
     "transfertypecode":{
          "transfertypecode":''
          }
     }
    this.messagecode = ["CHQB","CORT","HOLD","INTC","PHOB","PHOI","PHON","REPA","SDVA"];
    this.transfertype=[{
      name:"B-Bank to Bank Tranfer",
      code:"B"
    },
  {
    name:"C-Customer to Customer Transfer",
    code:"C"
  }]

  }

  apiResult={
    success:false,
    error:false
  }

  handleTransfer() {
    let url = 'http://localhost:8081/transaction'
    let payLoad = {
      "receiveraccountholdernumber": this.transactionobject.receiveraccountholdernumber,
      "receiveraccountholdername": this.transactionobject.receiveraccountholdername,  
      "receiverBIC":
                    {  "bic": this.transactionobject.receiverBIC.bic },
      "inramount": this.transactionobject.inramount,
      "customerid": 
                    {  "customerid": localStorage.getItem("customerid") },
       
      "messagecode": {
          "messagecode": this.transactionobject.messagecode.messagecode
          },
     "transfertypecode":{
          "transfertypecode":this.transactionobject.transfertypecode.transfertypecode
          }
     }
     this.http.post(url,payLoad).subscribe((result)=>{
      this.apiResult.success=true;
      this.apiResult.error =false;

      
     },err => {
      
        this.apiResult.success=false;
        this.apiResult.error =true;
    })
    }

  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigate(['/dashboard'])
  }
  myurl:any;
invalidname:any;
 bankname:any;
  getbankbybic()
  {
    this.myurl="http://localhost:8081/bank/"+this.transactionobject.receiverBIC.bic;
     let response= this.http .get(this.myurl);
     response.subscribe((data)=>this.bankname=data);
     
     console.log(this.bankname);
  }

  

}
