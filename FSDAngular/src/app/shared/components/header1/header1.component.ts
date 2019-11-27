import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search.service';
import { TouchSequence } from 'selenium-webdriver';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {
  url=""
  username="";
  searchterm="";
  constructor(private loginService:AuthenticationService,private router:Router,private searchService:SearchService, private settingService:SettingService) { }

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
    this.settingService.getuserdata(this.username).subscribe(response=>{
      this.url=response.url
    })
  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['login'])
  }

  search(searchterm){
    this.searchService.onSearch(searchterm).subscribe(response=>{
      
      this.searchService.setResult(response)
      
      
      this.router.navigate(['dashboard/search']);

    })

  }



  
}
