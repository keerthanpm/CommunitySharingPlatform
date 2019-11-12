import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { NewArticleComponent } from 'src/app/modules/new-article/new-article.component';
import { SettingsComponent } from 'src/app/modules/settings/settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';





@NgModule({
  declarations: [
    Layout1Component,
    DashboardComponent,
    NewArticleComponent,
    SettingsComponent,
    ProfileComponent

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class Layout1Module { }
