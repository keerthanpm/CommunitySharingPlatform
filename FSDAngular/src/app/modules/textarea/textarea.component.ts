import { TextareaService } from './../../service/textarea.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  value:string=" hello"
  constructor(private textareaService:TextareaService) { }
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
  }

  print(value){
    
    console.log(this.value)
  }

  onKey($event,text){
    this.value=text
    this.textareaService.getdata(this.value);
  }

}
