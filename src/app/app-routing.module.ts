import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {Page1Component} from './page1/page1.component';
import {Page2Component} from './page2/page2.component';
import {AuthenticationGuard} from './authgaurds/authentication.guard';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {MapsComponent} from './maps/maps.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MycommunityComponent} from './components/mycommunity/mycommunity.component';
import {MypostsComponent} from './components/myposts/myposts.component';
import {MyreviewComponent} from './components/myreview/myreview.component';
import {MainhomeComponent} from './components/mainhome/mainhome.component';
import {ProductdetailsComponent} from './components/productdetails/productdetails.component'
const routes: Routes = [
  {
  path:'login',
  component:LoginComponent,

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:"searchbar",
    component:SearchBarComponent
  },
  {
    path:"map",
    component:MapsComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:
    [
      {
        path:'page1',
        component:ProfileComponent,
        children:[
        {
          path:'mycommunity',
          component:MycommunityComponent
        },
        {
          path:'myposts',
          component:MypostsComponent
        },
        {
          path:'myreview',
          component:MyreviewComponent
        },
        {
          path:'',
          redirectTo:"mycommunity",
          pathMatch:'full'
        }
      ]

      },
      {
        path:'page2',
        component:Page2Component,
        canActivate:[AuthenticationGuard]
      },
     
     
      {
        path:'',
        pathMatch:"full",
        redirectTo:'home/page1'
      }
    ]

  },
  {
    path:"mainhome",
    component:MainhomeComponent
  },
  {
    path:'productdetails/:id',
    component:ProductdetailsComponent
  },
  {
    path:'',
    redirectTo:'mainhome',
    pathMatch:"full"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
