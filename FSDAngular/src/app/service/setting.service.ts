import { Injectable, OnInit } from '@angular/core';

import { User2 } from './signup.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingService implements OnInit {
 

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    
  }

  getuserdata(username){
    return this.httpClient.get<User2>('https://conduit-jwt.cfapps.io/user/'+username)
  }

  updateuserdata(user){
    return this.httpClient.post('https://conduit-jwt.cfapps.io/user/update',user)

  }

}
