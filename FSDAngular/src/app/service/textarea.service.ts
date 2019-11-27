import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextareaService {

  textarea:string=""
  t:string=""
  constructor() { }

  getdata(text){
    this.textarea=text
    console.log("Inside TextAreaService...")
    console.log(this.textarea)
  }

  givedata(){
    console.log("givedata " + typeof( this.textarea))
    return this.textarea;
  }
}
