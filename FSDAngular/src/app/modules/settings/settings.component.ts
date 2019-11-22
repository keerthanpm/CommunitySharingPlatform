import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { User2 } from 'src/app/service/signup.service';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
}) 
export class SettingsComponent implements OnInit {
  

  user:User2=new User2("","","","","");
  settingsForm:FormGroup;
  urlphoto:string="";
  username:string="";
  bio:string="";
password:string="";
email:string="";
post:any;
isSubmitting=false;

get userName(){
  return this.settingsForm.get('userName1');
}

constructor(private fb: FormBuilder,private settingService:SettingService ){
  this.settingsForm = fb.group({
    'email':['',[Validators.required, Validators.email]],
    'username':['',[Validators.required, Validators.minLength(3)]],
    'password':['',[Validators.required, Validators.minLength(8)]],
    'url':[''],
    'bio':['']
    });
}
ngOnInit() {
    this.getuserdata();
}

// onsettings(post){
//   this.isSubmitting=true;
//   let formObj = this.settingsForm.getRawValue(); 
  
  
//  console.log(this.settingsForm.value)
//   // this.data.changeMessage(this.settingsForm.value.userName1);
//   alert('Update succesful');
  
// }
getuserdata(){
  this.settingService.getuserdata(sessionStorage.getItem('username')).subscribe(response=>{
    this.user=response;
    console.log(response)
  })

}
 
}