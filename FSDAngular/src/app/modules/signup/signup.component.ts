import { Component,OnInit} from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validator';
import {UsernameServiceService} from '../../username-service.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { SignupService, User } from 'src/app/service/signup.service';
import { MailService } from 'src/app/service/mail.service';
import  Swal  from 'sweetalert2';

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
isSubmitting=false;

  user:User=new User("","","");
  get userName(){
    return this.registrationForm.get('userName1');
  }
  constructor(private fb: FormBuilder,private router: Router,private signupService:SignupService,private mailService:MailService ){
    this.registrationForm = fb.group({
      'email':['',[Validators.required, Validators.email]],
      'userName1':['',[Validators.required, Validators.minLength(3),forbiddenNameValidator(/password/)]],
      'password':['',[Validators.required, Validators.minLength(8)]],
      'confirmPassword':['',Validators.required],
    },{'validator':PasswordValidator});
  }
   
  register(user){
    this.signupService.register(user).subscribe(response=>{
      // alert("Sign Up Successfull");
      Swal.fire({
        icon: 'success',
        title: 'Signed up successfully',
        text: 'Sign in to explore!!',
        
      })
      this.mailService.sendmail(user.email).subscribe();
      this.router.navigate(['login']);
    })

  }

}
