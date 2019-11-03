import { Component, OnInit } from '@angular/core';
import { UsernameServiceService } from '../../username-service.service';
import {LoginService} from '../../login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  constructor(private data: UsernameServiceService, private _logInService: LoginService ){}
  userModel:User;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.user= message)
    this.userModel = new User(this.user,'');
  }
  onSubmit()
  {
    console.log(this.userModel);
    this._logInService.signin(this.userModel)
  }
}

export class User {

  constructor(
      public name:String,
      public password:string
    

  ){}
}
