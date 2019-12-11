import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layout/default/default.module';
import {MatToolbarModule} from '@angular/material/toolbar';


import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { Layout1Module } from './layout/layout1/layout1.module';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { SettingsComponent } from './modules/settings/settings.component';
import { BasicAuthHtppInterceptorService } from './service/basic-auth-htpp-interceptor.service';
import { ArticleComponent } from './modules/article/article.component';
import { MypostsComponent } from './modules/myposts/myposts.component';
import { EditArticleComponent } from './modules/edit-article/edit-article.component';
import { TextareaComponent } from './modules/textarea/textarea.component';
import { UpdateArticleComponent } from './modules/update-article/update-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    MypostsComponent,
    EditArticleComponent,
    TextareaComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatTabsModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Layout1Module,
    RichTextEditorAllModule,
    
    

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
