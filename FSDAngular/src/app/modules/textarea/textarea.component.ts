import { TextareaService } from './../../service/textarea.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { GetarticleService } from 'src/app/service/getarticle.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  article:any
  value="";
  constructor(private textareaService:TextareaService, private getArticleService:GetarticleService) { }
  public tools: object = {
    items: [
           'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
           'Undo', 'Redo']   };

  title = 'texteditor';
  onSubmit(form: NgForm): void {
    alert(form.value.name);
  }

  ngOnInit() {  
    console.log(this.value)
    this.getarticle()
    
  }

  print(value){
    
    console.log(this.value)
  }

  onKey($event,text){
    this.value=text
    this.textareaService.getdata(this.value);
  }

  getarticle(){
    this.getArticleService.getarticle(sessionStorage.getItem('id')).subscribe(response=>{
      console.log("Inside Edit Article")
      console.log(response)
      this.article=response
      //this.value=this.article.post==undefined?"":this.article.post
      sessionStorage.removeItem('id')
      
    })
  }

}
