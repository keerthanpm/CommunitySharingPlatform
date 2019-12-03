import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { SettingService } from 'src/app/service/setting.service';
import { Router, NavigationEnd } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  username:string
  searcharr=[];

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
  constructor(private router:Router,private searchService:SearchService,private settingService:SettingService,private idService:PostService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
        this.ngOnInit();
      }
      // Instance of should be: 
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  

  ngOnInit() {
    this.fetchdata();
    this.addprofileurl();
  }

  fetchdata(){
    this.searcharr=this.searchService.searchResult();
  }

  addprofileurl(){
    console.log("Inside Search:")
    //console.log(this.searcharr)
    for (let user in this.searcharr){
      this.username=this.searcharr[user].username;
      this.settingService.getuserdata(this.username).subscribe(response=>{
        this.searcharr[user].url=response.url
  })
    }
    console.log(this.searcharr)
  }



}
