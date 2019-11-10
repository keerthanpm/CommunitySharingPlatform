import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../../globaldata.service';
@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {
  posts = [];
  likes;
  constructor(private globaldataservice: GlobaldataService) { }
  myClickFunction(event,userId,threadId) { 
    
    //just added console.log which will display the event details in browser on click of the button.
    this.globaldataservice.postLike(userId,threadId);
    
  }
  
  ngOnInit() {
    this.globaldataservice.sendGetRequest().subscribe((data: any[])=>{
      
      this.posts = data;
      
  });
  
  
}
  
}
