import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {NewarticleService} from '../../newarticle.service'

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent  {

 
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
  constructor(private fb: FormBuilder, private newarticle: NewarticleService,private router:Router ){
    this.registrationForm = fb.group({
      'image':[''],
      'articleTittle':['',[Validators.required]],
      'yourArticle':['',[Validators.required, Validators.minLength(8)]],
      'tags':['',Validators.required],
    });
  }
   
  
    onRegister(post){
      this.isSubmitting=true;
      let formObj = this.registrationForm.getRawValue(); 
     
      
      console.log(this.registrationForm.value)
      console.log(this.registrationForm.value.articleTittle)
      this.newarticle.postThread(this.registrationForm.value.articleTittle,this.registrationForm.value.yourArticle,this.registrationForm.value.tags,this.registrationForm.value.image)
      alert('New Article posted successfully');
      this.router.navigate(['/dashboard/globalfeed'])
     
    }
  

}
