import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import {User} from './modules/login/login.component'
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  _url='http://127.0.0.1:3000/sign_up';
  constructor(private _http: HttpClient) { }
  signup(user){
    return this._http.post(this._url,user).subscribe(

                 
    );
    
  }}