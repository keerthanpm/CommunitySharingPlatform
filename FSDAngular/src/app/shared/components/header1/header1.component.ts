import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit {

  constructor(private loginService:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.loginService.logOut();
    this.router.navigate(['login'])
  }

}
