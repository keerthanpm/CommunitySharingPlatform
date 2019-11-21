import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourfeedService {

  private REST_API_SERVER = "http://localhost:4000/thread/yourfeed";
  
  

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    
    return this.httpClient.get(this.REST_API_SERVER+"?userId="+sessionStorage.getItem('username'));
   
  }
}
