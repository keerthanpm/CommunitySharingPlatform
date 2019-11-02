import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { SignupComponent } from './modules/signup/signup.component';
import { LoginComponent } from './modules/login/login.component';
import { YourfeedComponent } from './shared/components/yourfeed/yourfeed.component';
import { GlobalfeedComponent } from './shared/components/globalfeed/globalfeed.component';


const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:HomeComponent
  },{
    path:'signup',
    component:SignupComponent
  },{
    path:'login',
    component:LoginComponent
  },{
    path:'yourfeed',
    component:YourfeedComponent
  },{
    path:'globalfeed',
    component:GlobalfeedComponent
  }]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
