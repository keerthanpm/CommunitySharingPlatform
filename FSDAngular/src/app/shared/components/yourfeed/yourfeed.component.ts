import { Component, OnInit } from '@angular/core';
import { YourfeedService } from '../../../service/yourfeed.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
@Component({
  selector: 'app-yourfeed',
  templateUrl: './yourfeed.component.html',
  styleUrls: ['./yourfeed.component.css']
})
export class YourfeedComponent implements OnInit {
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
  
  constructor(private yourfeedservice: YourfeedService,private router:Router,private idService:PostService) { }

  
  ngOnInit() {
    
    this.yourfeedservice.sendGetRequest().subscribe((data: any[])=>{
      
      this.posts = data;
      console.log(this.posts);
      
  });
}
}
