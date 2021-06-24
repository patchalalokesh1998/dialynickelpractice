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
        component:Page1Component

      },
      {
        path:'page2',
        component:Page2Component,
        canActivate:[AuthenticationGuard]
      },
     
      {
        path:'',
        pathMatch:"full",
        redirectTo:'page1'
      }
    ]

  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:"full"

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
