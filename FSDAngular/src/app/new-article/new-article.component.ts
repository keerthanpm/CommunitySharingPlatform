import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent {
  newarticleForm:FormGroup;
  articleTitle:string="";
  articleAbout:string="";
  yourArticle:string="";
  tags:any;

  constructor(private frm:FormBuilder) { 
    this.newarticleForm=frm.group({
      'articleTitle':['',[Validators.required,Validators.minLength(3),Validators.maxLength(25)]],
      // 'articleAbout':['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      'yourArticle':['',[Validators.required,Validators.minLength(10),Validators.maxLength(2000)]],
      // 'tags':['',[Validators.required,Validators.minLength(1),Validators.maxLength(20)]]

    });

  }

  onArticle(){
    console.log(this.newarticleForm.value)
  }

}







