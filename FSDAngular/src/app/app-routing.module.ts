import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LoginComponent } from './modules/login/login.component';
import { YourfeedComponent } from './shared/components/yourfeed/yourfeed.component';
import { GlobalfeedComponent } from './shared/components/globalfeed/globalfeed.component';
import { Layout1Component } from './layout/layout1/layout1.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NewArticleComponent } from './modules/new-article/new-article.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { ProfileComponent } from './modules/profile/profile.component';


const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:HomeComponent,
    children:[{
      path:'',
      component:GlobalfeedComponent
    },{
      path:'globalfeed',
      component:GlobalfeedComponent
      
    },{
      path:'yourfeed',
      component:YourfeedComponent
    }]
  },{
    path:'signup',
    component:SignupComponent
  },{
    path:'login',
    component:LoginComponent
  }]
  
},{
  path:'dashboard',
  component:Layout1Component,
  children:[{
    path:'',
    component: DashboardComponent,
    children:[{
        path:'',
        component:YourfeedComponent
      },{
        path:'globalfeed',
        component:GlobalfeedComponent
        
      },{
        path:'yourfeed',
        component:YourfeedComponent
      }]
  },{
    path:'newarticle',
    component:NewArticleComponent
  },{
    path:'settings',
    component:SettingsComponent
  },{
    path:'profile',
    component:ProfileComponent
  }]
}]
 
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
