import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  settingsForm:FormGroup;
  urlphoto:string="";
  userName1:string="";
password:string="";
email:string="";
post:any;
isSubmitting=false;

get userName(){
  return this.settingsForm.get('userName1');
}
constructor(private fb: FormBuilder ){
  this.settingsForm = fb.group({
    'email':['',[Validators.required, Validators.email]],
    'userName1':['',[Validators.required, Validators.minLength(3)]],
    'password':['',[Validators.required, Validators.minLength(8)]],
    'urlphoto':[''],
    });
}

onsetting(post){
  this.isSubmitting=true;
  let formObj = this.settingsForm.getRawValue(); 
  
  
 console.log(this.settingsForm.value)
  // this.data.changeMessage(this.settingsForm.value.userName1);
  alert('Update succesful');
  
}
 
}
