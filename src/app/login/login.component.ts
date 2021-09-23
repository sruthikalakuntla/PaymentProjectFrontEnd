import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup; 
  userProfile:any;
  customer:any;
  flag:any;
  constructor(private http:HttpClient, private router:Router) {
    this.userProfile={
      "username":'',
      "userpassword":''
    };
    this.loginForm =new FormGroup({
      username: new FormControl('', [
  
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(/^[a-z0-9]+$/i)
      ]),
      password: new FormControl('', [
  
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/)
      ])
    });
  
  }

  ngOnInit(): void {
    
  }
  apiResult={
    success:false,
    error:false
  }
  handleLogin() {
    let url = 'http://localhost:8081/user'
    let payLoad= {
      "username":this.userProfile.username,
      "userpassword":this.userProfile.userpassword
    }
    this.http.post(url,payLoad).subscribe((result)=>{
      this.customer=result;
      this.apiResult.success=true;
      this.apiResult.error =false;
      localStorage.setItem("customerid",this.customer.customerid)
      
      this.router.navigate(['/dashboard'])
      
    },err => {
       this.apiResult.success=false;
       this.apiResult.error =true;
   })
   }

  get username() {
    return this.loginForm.controls['username'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
}