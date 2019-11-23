
import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetarticleService, article } from 'src/app/service/getarticle.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {
  article:any
  ngOnInit(){

    this.getarticle();
    
  }

  registrationForm:FormGroup;
articleTittle:string="";
articleAbout:string="";
yourArticle:string="";
tags:string="";
post:any;
isSubmitting=false;


 
  constructor(private fb: FormBuilder,private router:Router,private getArticleService:GetarticleService ){
    this.registrationForm = fb.group({
      'articleAbout':['',[Validators.required, Validators.minLength(3)]],
      'articleTittle':['',[Validators.required]],
      'yourArticle':['',[Validators.required, Validators.minLength(8)]],
      'tags':['',Validators.required],
    });
  }
   
  getarticle(){
    this.getArticleService.getarticle(sessionStorage.getItem('id')).subscribe(response=>{
      console.log("Inside Edit Article")
      console.log(response)
      this.article=response
    })
  }

  updatearticle(article){
    console.log("Inside Update Article")
    console.log(article)
    this.getArticleService.updatearticle(article).subscribe(response=>{
    })
    alert("Updated Successfully..!")
    this.router.navigate(['/dashboard/profile'])

  }

  deletearticle(){
    this.getArticleService.deletearticle(sessionStorage.getItem('id')).subscribe(response=>{
      alert("Deleted Sucessfully...")
    })
  }
  
    

}
