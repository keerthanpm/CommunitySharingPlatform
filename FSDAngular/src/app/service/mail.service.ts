import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }

  sendmail(email){
    return this.http.get("http://localhost:1234/api/send-mail?email="+email);
  }
}
