import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../../globaldata.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {
  posts = [];
  likes;
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
  constructor(private globaldataservice: GlobaldataService,private router:Router,private idService:PostService) { }
  myClickFunction(event,threadId) { 
   
    //just added console.log which will display the event details in browser on click of the button.
    this.globaldataservice.postLike(threadId);
  
    this.globaldataservice.sendGetRequest().subscribe((data: any[])=>{
    this.posts = data;
    this.ngOnInit();
    this.ngOnInit();
  
      
  });
  
  
  }
  
  ngOnInit() {
    this.globaldataservice.sendGetRequest().subscribe((data: any[])=>{
      
      this.posts = data;
      
  });
  
  
  
}
  
}
