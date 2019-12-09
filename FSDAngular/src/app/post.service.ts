import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  id:any
  private REST_API_SERVER = "https://thread-service.herokuapp.com/thread/get";
  private REST_LIKE_ROUTE = "https://thread-service.herokuapp.com/thread/like";
  private REST_POST_ROUTE = "https://thread-service.herokuapp.com/thread/post";
  private REST_REPLY_ROUTE = "https://thread-service.herokuapp.com/thread/postReply";

  constructor(private httpClient: HttpClient) { }

  putid(id){
      this.id=id
  }

  getid(){
    return this.id;
  }
  public sendGetRequest(){
    
    return this.httpClient.get(this.REST_API_SERVER);
   
  }
  public sendGetOneRequest(id){
    // return this.httpClient.get(this.REST_API_SERVER,{
      
      
    // })
    return this.httpClient.get(this.REST_API_SERVER+"?threadId="+id);
    
  }
  public postLike(threadId){
    
    let body = {
      id: sessionStorage.getItem('username'),
      threadId: threadId
      
    }
    
    this.httpClient.post(this.REST_LIKE_ROUTE, body).subscribe();
  }

  public postComment(threadId, post){
    let body = {
      threadId: this.id,
      post: post,
      userId: sessionStorage.getItem('username'),
    }
    this.httpClient.post(this.REST_POST_ROUTE,{threadId: this.id,
      post: post,
      userId: sessionStorage.getItem('username')}).subscribe();
  }

  public postReply(timestamp,reply,threadId){
    let body = {
      threadId: threadId,
      post: reply,
      username: sessionStorage.getItem('username'),
      timestamp:timestamp
    }
    this.httpClient.post(this.REST_REPLY_ROUTE,body).subscribe();
  }

  

 
  
}
