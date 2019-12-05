import { PostService } from '../../post.service';
import { MypostsService } from '../../service/myposts.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetarticleService } from 'src/app/service/getarticle.service';
import { SettingService } from 'src/app/service/setting.service';
import  Swal  from 'sweetalert2';




@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

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
  constructor(private myfeedservice: MypostsService,private router:Router,private idService:PostService,private getArticleService:GetarticleService,private settingService:SettingService) { }

  ngOnInit() {
    this.getdata();
    
  }

  editarticle(id){
    if(sessionStorage.getItem(id)){
      sessionStorage.removeItem("id");
    }
    sessionStorage.setItem("id",id);
    this.router.navigate(['/dashboard/editarticle'])
  }

  deletearticle(id){
    this.getArticleService.deletearticle(id).subscribe();
    // alert("Deleted Successfully");
    Swal.fire({
      icon: 'success',
      title: 'Deleted!!!',
      text: 'Your post has been deleted successfully ',
      
    })
    this.ngOnInit();
    this.ngOnInit();
    
    
  }

  
//Fetching URL from the MySQL and adding an attribute in fetched content of MongoDB
  getdata(){
    this.myfeedservice.sendGetRequest().subscribe((data: any[])=>{
      for(let user of data){
        console.log(user)
        
        this.username=user.username
        
        this.settingService.getuserdata(this.username).subscribe(response=>{
            user['url']=response.url
      })}
      this.posts = data;      
    }) 
  }

}
