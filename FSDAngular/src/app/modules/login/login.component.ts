import { Component, OnInit } from '@angular/core';
//import { UsernameServiceService } from '../../username-service.service';
//import {LoginService} from '../../login.service'
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { User, User1 } from 'src/app/service/signup.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
errorstring=""
loginForm:FormGroup;
userName1:string="";
password:string="";
post:any;
isSubmitting=false;

user:User1=new User1("","")

  
  constructor(private fb: FormBuilder,private loginService:AuthenticationService,private router:Router){
    this.loginForm = fb.group({
      'userName1':['',[Validators.required, Validators.minLength(3),]],
      'password':['',[Validators.required, Validators.minLength(3)]],
      
    });
  }
   
    login(){
      this.errorstring=""
      this.loginService.authenticate(this.user.username,this.user.password).subscribe(response=>{
        this.router.navigate(['/dashboard']);
      },error=>{
        this.errorstring="Invalid Credentials! Please try again"
      })
      
    }
  
    
  }