import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/service/setting.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post
  id:any
  username:string
  commentusername:string
  comment="";

  constructor(private postService:PostService,private settingService:SettingService ) { 

  }

  ngOnInit(
  ) {
    this.getdata();

    console.log("Post data")

  };

  // PostComment(post._id,comment.value){

  // }
  PostComment(threadId,comment) { 
   
    //just added console.log which will display the event details in browser on click of the button.
    this.postService.postComment(this.id,comment)
  
  //   this.postService.sendGetOneRequest(this.id).subscribe((data)=>{
  //   this.post = data;
  
      
  // });
  this.ngOnInit();
  this.ngOnInit();
  
  
  }

  getdata(){
    this.id=sessionStorage.getItem("id");
    this.postService.sendGetOneRequest(this.id).subscribe((data)=>{
      
      
      
        //console.log(data['comment'][0].username);
        this.username=data['username']
        
        this.settingService.getuserdata(this.username).subscribe(response=>{
            this.post['url']=response.url
      })
      
      for(let user in data['comment']){

        this.settingService.getuserdata(data['comment'][user].username).subscribe(response=>{
          data['comment'][user].url=response.url
    })
        
        //this.commentusername=user.username
        //console.log("Inside comment Array")
        //console.log(data['comment'][user].username)
        
      }

     


      this.post = data;      
    }) 
    
    // console.log("Inside article:"+this.id);
  //   this.postService.sendGetOneRequest(this.id).subscribe(data=>{
  //     console.log("Inside Single Post")
  //     console.log(data['username'])
  //     console.log('hellooo')
  //     this.post = data;
  //     //console.log(this.post);

    
      
  // });
  }
  

  }




