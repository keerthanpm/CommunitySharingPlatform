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
    return this.httpClient.get<User2>('http://localhost:8888/user/'+username)
  }

}
