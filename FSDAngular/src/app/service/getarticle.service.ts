import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class article{
  // constructor(
  //   public likes:[],
  //   public comment:[],
  //   public _id:string,
  //   public title:string,
  //   public post:string,
  //   public username:string,
  //   public date:string,
  //   public __v:number
  // ){}
  // "likes": [],
  // "comment": [],
  // "_id": "5dd52e592f10404ae8ee2c68",
  // "title": "FSD",
  // "post": "KDAKJHKSJ",
  // "username": "iyaaz",
  // "date": "2019-11-20T12:15:21.210Z",
  // "__v": 0
}
@Injectable({
  providedIn: 'root'
})
export class GetarticleService {

  constructor(private httpClient:HttpClient) { }

  getarticle(id){
    return this.httpClient.get('http://localhost:4000/thread/get'+'?threadId='+id)
  }

  updatearticle(article){
    let body = {
      threadId: article._id,
      title:article.title,
      post: article.post,
      tags: article.tags
    }
    return this.httpClient.post('http://localhost:4000/thread/updateThread',body)
  }

  deletearticle(id){
    return this.httpClient.get('http://localhost:4000/thread/deleteThread'+'?threadId='+id)
  }
}
