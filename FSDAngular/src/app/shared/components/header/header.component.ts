import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  searchterm="";
  constructor(private searchService:SearchService,private router:Router) { }

  ngOnInit() {
  }

  search(searchterm){
    this.searchService.onSearch(searchterm).subscribe(response=>{
      
      this.searchService.setResult(response)
      
      this.router.navigate(['search']);
    })

  }

}
