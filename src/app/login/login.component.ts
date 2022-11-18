import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string | undefined;
  password:string | undefined;

  constructor( private router: Router ) {
   }

  ngOnInit(): void { }
  
  loginUser(){
    
    if(this.email=="apurva@gmail.com"&& this.password=="12345"){
      this.router.navigateByUrl('/productlist');}
      else{
        alert("enter valid credentials")
      }
    }
  }

