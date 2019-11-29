import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  searchterm="";

  constructor(private searchService:SearchService,private router:Router) { }

  ngOnInit() {
  }
  
  click(searchterm){
   
    this.searchService.onSearchTag(searchterm).subscribe(response=>{
      
     console.log( this.searchService.setResult(response));
      
      this.router.navigate(['search']);
  })

}
}
