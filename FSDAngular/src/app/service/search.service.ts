import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
   searcharr=[]
  constructor(private httpClient:HttpClient) { }
  onSearch(searchterm){

     return this.httpClient.get("http://localhost:4000/thread/search"+"?searchTerm="+searchterm);
     
  }

  setResult(res){
    this.searcharr=res;
  }

  searchResult(){
    return this.searcharr;
  }
}