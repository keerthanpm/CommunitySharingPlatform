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
  tags=new Array()
  inlooptag=new Array()

  constructor(private searchService:SearchService,private router:Router) { }

  ngOnInit() {
    this.gettags()
  }
  
  click(searchterm){
   
    this.searchService.onSearchTag(searchterm).subscribe(response=>{
      
     console.log( this.searchService.setResult(response));
      
      this.router.navigate(['/dashboard/search']);
  })

}

gettags(){
  this.searchService.getTags().subscribe(response=>{
    //console.log("Inside Tag service")
    //console.log(response)
    for (var index in response){
       
      
      this.inlooptag=response[index].tags.split(",").slice(1,-1);
      //console.log(this.inlooptag)
      // this.tags.push(this.inlooptag);
      for(var inloopindex in this.inlooptag){
           this.tags.push(this.inlooptag[inloopindex])
  
       }
    }
    console.log(this.tags)

  }
  )
}
}
