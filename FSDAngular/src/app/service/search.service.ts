import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
   searcharr=[]
  constructor(private httpClient:HttpClient) { }
  onSearch(searchterm){

     return this.httpClient.get("https://thread-service.herokuapp.com/thread/search"+"?searchTerm="+searchterm);
     
  }

  setResult(res){
    this.searcharr=res;
    
  }

  searchResult(){
    return this.searcharr;

  }
  onSearchTag(searchterm){
    return this.httpClient.get("https://thread-service.herokuapp.com/thread/searchByTags"+"?searchTerm="+searchterm);

  }

  getTags(){
    return this.httpClient.get("https://thread-service.herokuapp.com/thread/latestTags")
  }
}


