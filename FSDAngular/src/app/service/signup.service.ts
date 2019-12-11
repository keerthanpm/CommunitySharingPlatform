import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
export class User{
  constructor(
    public username:string,
    public password:string,
    public email:string
  ){}
}
export class User1{
  constructor(
    public username:string,
    public password:string,
  ){}
}

export class User2{
  constructor(
    
    public username:string,
    public password:string,
    public email:string,
    public url:string,
    public bio:string
  ){}

}
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient:HttpClient,private router:Router) { }

  register(user){
    return this.httpClient.post<User>('https://conduit-jwt.cfapps.io/user/register',user)
  }
}
