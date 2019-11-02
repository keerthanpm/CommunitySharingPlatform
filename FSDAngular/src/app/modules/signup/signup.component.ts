import { Component,OnInit} from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
//import {UsernameServiceService} from '../username-service.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
//import{ SignupService} from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
  registrationForm:FormGroup;
userName1:string="";
password:string="";
confirmPassword:string="";
email:string="";
post:any;


  get userName(){
    return this.registrationForm.get('userName1');
  }
  constructor(private fb: FormBuilder,private router: Router ){
    this.registrationForm = fb.group({
      'email':['',[Validators.required, Validators.email]],
      'userName1':['',[Validators.required, Validators.minLength(3),forbiddenNameValidator(/password/)]],
      'password':['',[Validators.required, Validators.minLength(8)]],
      'confirmPassword':['',Validators.required],
    },{'validator':PasswordValidator});
  }
   
  
    onRegister(post){
      let formObj = this.registrationForm.getRawValue(); 
      //this._signUpService.signup(formObj)
      
      console.log(this.registrationForm.value)
     // this.data.changeMessage(this.registrationForm.value.userName1);
      alert('Signup successful please login');
      this.router.navigate(['/login']);
    }

  
}
