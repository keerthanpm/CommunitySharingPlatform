import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MypostsService {
  private REST_API_MYPOST = "https://thread-service.herokuapp.com/thread/myPosts";


  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    
    return this.httpClient.get(this.REST_API_MYPOST+"?userId="+sessionStorage.getItem('username'));
   
  }
}
