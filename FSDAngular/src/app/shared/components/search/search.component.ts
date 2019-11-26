import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searcharr=[];
  constructor(private searchService:SearchService) { }

  ngOnInit() {
    this.fetchdata();
  }

  fetchdata(){
    this.searcharr=this.searchService.searchResult();
  }



}
