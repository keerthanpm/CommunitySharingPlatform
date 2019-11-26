import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { ConcatSource } from 'webpack-sources';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username:string
  searcharr=[];
  constructor(private searchService:SearchService,private settingService:SettingService) { }

  ngOnInit() {
    this.fetchdata();
    this.addprofileurl();
    console.log(this.searcharr)

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
