import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewarticleService {
  private REST_LIKE_ROUTE = "https://thread-service.herokuapp.com/thread/create";
  constructor(private httpClient: HttpClient) { }
  public postThread(title, post, tag, img){
    //const headers = new HttpHeaders({ Authorization: 'Bearer ' + sessionStorage.getItem('token') });
    console.log('token:'+sessionStorage.getItem('token'));
    let body = {
      title: title,
      post: post,
      userId: sessionStorage.getItem("username"),
      tags: tag,
      image: img
    }
    
    this.httpClient.post(this.REST_LIKE_ROUTE, body).subscribe();
  }
}
