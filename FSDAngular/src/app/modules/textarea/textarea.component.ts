import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  value:string="type......."
  constructor() { }
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

}
