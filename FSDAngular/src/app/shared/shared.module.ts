import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GlobalfeedComponent } from './components/globalfeed/globalfeed.component';
import { YourfeedComponent } from './components/yourfeed/yourfeed.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { Header1Component } from './components/header1/header1.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './components/error/error.component';
import { TagsComponent } from './components/tags/tags.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalfeedComponent,
    YourfeedComponent,
    Header1Component,
    SearchComponent,
    ErrorComponent,
    TagsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GlobalfeedComponent,
    YourfeedComponent,
    MatTabsModule,
    MatToolbarModule,
    Header1Component,
    SearchComponent,
    
  ]
})
export class SharedModule { }
