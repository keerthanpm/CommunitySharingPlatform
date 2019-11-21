import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobaldataService {

  private REST_API_SERVER = "http://localhost:4000/thread/get";
  private REST_LIKE_ROUTE = "http://localhost:4000/thread/like";
  

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    
    return this.httpClient.get(this.REST_API_SERVER);
   
  }
  public postLike(userId, threadId){
    
    let body = {
      id: sessionStorage.getItem('username'),
      threadId: threadId
      
    }
    
    this.httpClient.post(this.REST_LIKE_ROUTE, body).subscribe();
  }
  
}
