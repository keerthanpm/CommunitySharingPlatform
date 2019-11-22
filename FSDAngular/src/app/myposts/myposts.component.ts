import { PostService } from './../post.service';
import { MypostsService } from './../service/myposts.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  posts = [];
  route(id){
    console.log("Post id"+id)
    if(sessionStorage.getItem(id)){
      sessionStorage.removeItem("id");
    }
    sessionStorage.setItem("id",id);
    this.idService.putid(id);
    console.log(id)
    this.router.navigate(['/dashboard/article']);
  }
  constructor(private myfeedservice: MypostsService,private router:Router,private idService:PostService) { }

  ngOnInit() {
    this.myfeedservice.sendGetRequest().subscribe((data: any[])=>{
      console.log("I am inside mypost")
      this.posts = data;
      console.log(this.posts);
      
  });
  }

}