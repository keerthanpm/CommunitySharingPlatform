import { Component, OnInit } from '@angular/core';
import { YourfeedService } from '../../../service/yourfeed.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { SettingService } from 'src/app/service/setting.service';
@Component({
  selector: 'app-yourfeed',
  templateUrl: './yourfeed.component.html',
  styleUrls: ['./yourfeed.component.css']
})
export class YourfeedComponent implements OnInit {
  posts = [];
  username:string
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
  
  constructor(private yourfeedservice: YourfeedService,private router:Router,private idService:PostService,private settingService:SettingService) { }

  
  ngOnInit() {
    
    this.getdata();
}
//Fetching URL from the MySQL and adding an attribute in fetched content of MongoDB
getdata(){
  this.yourfeedservice.sendGetRequest().subscribe((data: any[])=>{
    for(let user of data){

      this.username=user.username
      
      this.settingService.getuserdata(this.username).subscribe(response=>{
          user['url']=response.url
    })}
    this.posts = data.reverse();      
  }) 
}
}
