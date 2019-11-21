import { Component, OnInit } from '@angular/core';
import { YourfeedService } from '../../../service/yourfeed.service';
@Component({
  selector: 'app-yourfeed',
  templateUrl: './yourfeed.component.html',
  styleUrls: ['./yourfeed.component.css']
})
export class YourfeedComponent implements OnInit {
  posts = [];
  
  constructor(private yourfeedservice: YourfeedService) { }

  
  ngOnInit() {
    
    this.yourfeedservice.sendGetRequest().subscribe((data: any[])=>{
      
      this.posts = data;
      console.log(this.posts);
      
  });
}
}
