import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../../globaldata.service';
@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {
  posts = [];
  constructor(private globaldataservice: GlobaldataService) { }

  ngOnInit() {
    this.globaldataservice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.posts = data;
  });
}
  
}
