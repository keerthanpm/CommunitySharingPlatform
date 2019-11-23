import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewarticleService {
  private REST_LIKE_ROUTE = "http://localhost:4000/thread/create";
  private UPDATE_ROUTE = "http://localhost:4000/thread/updateThread";
  constructor(private httpClient: HttpClient) { }
  public postThread(title, post, tag){
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    console.log('token:'+sessionStorage.getItem('token'));
    let body = {
      title: title,
      post: post,
      userId: sessionStorage.getItem("username"),
      tags: tag
    }
    
    this.httpClient.post(this.REST_LIKE_ROUTE, body).subscribe();
  }
  public updateThread(title, post, tag,threadid){
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    console.log('token:'+sessionStorage.getItem('token'));
    let body = {
      title: title,
      post: post,
      threadId: threadid,
      tags: tag
    }
    
    this.httpClient.post(this.UPDATE_ROUTE, body).subscribe();
  }
}
