import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class User{
  constructor(public status:string){}
}

export class JwtResponse{
  constructor(
    public jwttoken:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  authenticate(username, password) {
    return this.httpClient.post<any>('https://conduit-jwt.cfapps.io/user/authenticate',{username,password}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        let tokenStr= 'Bearer '+userData.jwttoken;
        sessionStorage.setItem('token', tokenStr);
        return userData;
       }
     )

    );
  }


  isUserLoggedIn(){
    let user=sessionStorage.getItem("username")
    return(!(user===null))
  }

  logOut(){
    sessionStorage.removeItem("username")
  }

  
}
