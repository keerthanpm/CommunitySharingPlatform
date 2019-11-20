import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewarticleService {
  private REST_LIKE_ROUTE = "http://localhost:4000/thread/create";
  constructor(private httpClient: HttpClient) { }
  public postThread(title, post){
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    console.log('token:'+sessionStorage.getItem('token'));
    let body = {
      title: title,
      post: post,
      userId: sessionStorage.getItem("username")
    }
    
    this.httpClient.post(this.REST_LIKE_ROUTE, body).subscribe();
  }
}
