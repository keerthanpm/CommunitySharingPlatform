import { PostService } from './../../post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  post
  id:any
  
  comment="";

  constructor(private postService:PostService ) { 

  }

  ngOnInit(
  ) {
    
    this.id=sessionStorage.getItem("id");
    console.log("Inside article:"+this.id);
    this.postService.sendGetOneRequest(this.id).subscribe((data)=>{
      
      this.post = data;
      console.log(this.post);

    
      
  });

    
      
  };

  // PostComment(post._id,comment.value){

  // }
  PostComment(threadId,comment) { 
   
    //just added console.log which will display the event details in browser on click of the button.
    this.postService.postComment(this.id,comment)
  
    this.postService.sendGetOneRequest(this.id).subscribe((data)=>{
    this.post = data;
  
      
  });
  
  
  }
  

  }




