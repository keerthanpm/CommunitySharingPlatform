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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalfeedComponent,
    YourfeedComponent,
    Header1Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    GlobalfeedComponent,
    YourfeedComponent,
    MatTabsModule,
    MatToolbarModule,
    Header1Component
  ]
})
export class SharedModule { }
