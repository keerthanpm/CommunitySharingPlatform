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


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GlobalfeedComponent,
    YourfeedComponent
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
    MatToolbarModule
  ]
})
export class SharedModule { }
