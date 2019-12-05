
import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GetarticleService, article } from 'src/app/service/getarticle.service';
import { TextareaService } from 'src/app/service/textarea.service';
import  Swal  from 'sweetalert2';

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


 
  constructor(private fb: FormBuilder,private textareaService:TextareaService,private router:Router,private getArticleService:GetarticleService ){
    this.registrationForm = fb.group({
      'image':[''],
      'articleTittle':['',[Validators.required]],
      'yourArticle':[''],
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
    console.log(this.article)
    this.article.post=this.textareaService.givedata();
    this.getArticleService.updatearticle(article).subscribe(response=>{
    })
    // alert("Updated Successfully..!")
     Swal.fire({
      icon: 'success',
      title: 'yayyy!!!',
      text: 'Your post has been updated successfully',
      
    })
    this.router.navigate(['/dashboard/profile'])

  }

  deletearticle(){
    this.getArticleService.deletearticle(sessionStorage.getItem('id')).subscribe(response=>{
      // alert("Deleted Sucessfully...")
      Swal.fire({
        icon: 'success',
        title: 'Deleted!!!',
        text: 'Your post has been deleted successfully successfully',
        
      })
    })
  }
  
    

}
