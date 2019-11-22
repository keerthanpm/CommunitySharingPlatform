import { Component, OnInit } from '@angular/core';
import { GlobaldataService } from '../../../globaldata.service';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { User2 } from 'src/app/service/signup.service';
import { SettingService } from 'src/app/service/setting.service';
@Component({
  selector: 'app-globalfeed',
  templateUrl: './globalfeed.component.html',
  styleUrls: ['./globalfeed.component.css']
})
export class GlobalfeedComponent implements OnInit {
  user:User2=new User2("","","","","");
  posts = [];
  username:string;
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
  constructor(private globaldataservice: GlobaldataService,private router:Router,private idService:PostService,private settingService:SettingService) { }
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
    
this.getdata();

  
  
}

//Fetching URL from the MySQL and adding an attribute in fetched content of MongoDB
getdata(){
  this.globaldataservice.sendGetRequest().subscribe((data: any[])=>{
    for(let user of data){

      this.username=user.username
      
      this.settingService.getuserdata(this.username).subscribe(response=>{
          user['url']=response.url
    })}
    this.posts = data;      
  }) 
}

// getuserdata(){
  //  this.settingService.getuserdata(sessionStorage.getItem('username')).subscribe(response=>{
  //    this.user=response;
  
    
  //  })

// }
  
}
