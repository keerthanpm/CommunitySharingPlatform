import { Component, OnInit } from '@angular/core';
//import { UsernameServiceService } from '../../username-service.service';
//import {LoginService} from '../../login.service'
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
loginForm:FormGroup;
userName1:string="";
password:string="";
post:any;
isSubmitting=false;


  get userName(){
    return this.loginForm.get('userName1');
  }
  constructor(private fb: FormBuilder){
    this.loginForm = fb.group({
      'userName1':['',[Validators.required, Validators.minLength(3),]],
      'password':['',[Validators.required, Validators.minLength(8)]],
      
    });
  }
   
  
    onlogin(post){
      this.isSubmitting=true;
      let formObj = this.loginForm.getRawValue(); 
      console.log(this.loginForm.value)
    }    
  }