import { Component, OnInit } from '@angular/core';

import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  ngOnInit(){
   
  }

  registrationForm:FormGroup;
articleTittle:string="";
articleAbout:string="";
yourArticle:string="";
tags:string="";
post:any;
isSubmitting=false;


  get userName(){
    return this.registrationForm.get('articleTittle');
  }
  constructor(private fb: FormBuilder ){
    this.registrationForm = fb.group({
      'articleAbout':['',[Validators.required, Validators.minLength(3)]],
      'articleTittle':['',[Validators.required]],
      'yourArticle':['',[Validators.required, Validators.minLength(8)]],
      'tags':['',Validators.required],
    });
  }
   
  
    onRegister(post){
      this.isSubmitting=true;
      let formObj = this.registrationForm.getRawValue(); 
     
      
      console.log(this.registrationForm.value)
      
      alert('Signup successful please login');
     
    }
  

}
