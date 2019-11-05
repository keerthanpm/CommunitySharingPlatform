import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  // articleForm:FormGroup;
  articleTitle:string="";
  articleAbout:string="";
  yourArticle:string="";
  tags:any;
  isSubmitting=false;

  
  constructor(private fb:FormBuilder) { }
  articleForm = this.fb.group({
    'articleTitle':[''],
    'articleAbout':[''],
    'yourArticle':[''],
    'tags':['']
    
      // 'articleTitle':['',[Validators.required,Validators.minLength(3)]],
      // 'articleAbout':['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      // 'yourArticle':['',[Validators.required,Validators.minLength(10),Validators.maxLength(2000)]],
      // 'tags':['',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]]

    });

  
  

  onArticle(post){
    this.isSubmitting=true;
    console.log(this.articleForm.value)
  }

}







