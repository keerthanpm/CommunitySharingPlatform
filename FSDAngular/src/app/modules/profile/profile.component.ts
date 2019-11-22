import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { SettingService } from 'src/app/service/setting.service';
import { User2 } from 'src/app/service/signup.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User2=new User2("","","","","");
  constructor(private settingService:SettingService) { }

  ngOnInit() {
    this.getuserdata();
  }

  getuserdata(){
    this.settingService.getuserdata(sessionStorage.getItem('username')).subscribe(response=>{
      this.user=response;
      console.log(response)
      
    })
  
  }

}
