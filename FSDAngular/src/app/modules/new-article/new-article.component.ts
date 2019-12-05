import { TextareaService } from './../../service/textarea.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewarticleService } from '../../newarticle.service'
import { HttpClient } from '@angular/common/http';
import { error } from 'util';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  ngOnInit() {

  }

  textareastring:string

  registrationForm: FormGroup;
  articleTittle: string = "";
  articleAbout: string = "";
  yourArticle: string = "";
  tags: string = "";
  post: any;
  image: [];
  isSubmitting = false;


  get userName() {
    return this.registrationForm.get('articleTittle');
  }
  constructor(private fb: FormBuilder, private newarticle: NewarticleService, private router: Router,private textareaService:TextareaService,private http:HttpClient) {
    this.registrationForm = fb.group({
      'image': ['', [Validators.pattern('^(?:(?:http(?:s)?|ftp)://)(?:\\S+(?::(?:\\S)*)?@)?(?:(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)(?:\\.(?:[a-z0-9\u00a1-\uffff](?:-)*)*(?:[a-z0-9\u00a1-\uffff])+)*(?:\\.(?:[a-z0-9\u00a1-\uffff]){2,})(?::(?:\\d){2,5})?(?:/(?:\\S)*)?$')]],
      // [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]
      'articleTittle': ['', [Validators.required]],
      'yourArticle': [''],
      'tags': ['', Validators.required],
    });



  }

  
  onRegister(post) {

    
    this.isSubmitting = true;
    let formObj = this.registrationForm.getRawValue();

    this.registrationForm.value.yourArticle=this.textareaService.givedata();
    console.log("Inside New Article Registration")
    console.log(this.registrationForm.value)
    console.log(this.registrationForm.value.yourArticle )
    

       this.newarticle.postThread(this.registrationForm.value.articleTittle, this.registrationForm.value.yourArticle, this.registrationForm.value.tags, this.registrationForm.value.image)
      // console.log("Sucessfull")
      //  alert('New Article posted successfully');
      Swal.fire({
        icon: 'success',
        title: 'New Post!!!',
        text: 'Your post has been cretaed successfully',
        
      })
      // this.router.navigate(['/dashboard/globalfeed']);
      this.http.get('http://localhost:9002/api/ping').subscribe(response=>{
    
        this.router.navigate(['/dashboard/globalfeed']);
         },error=>{
           console.log("Inside Ping error")
           if(error.status===200){
            this.router.navigate(['/dashboard/globalfeed']);
           }else{
            this.router.navigate(['/dashboard/error']);
           }
          
          
         })
      
    }
   


}
