import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AgmCoreModule } from '@agm/core';
import {MapsComponent} from './maps/maps.component';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { MypostsComponent } from './components/myposts/myposts.component';
import { MycommunityComponent } from './components/mycommunity/mycommunity.component';
import { MyreviewComponent } from './components/myreview/myreview.component';
import { CardComponent } from './utility/card/card.component';
import { RatingcardComponent } from './utility/ratingcard/ratingcard.component';
import { MycommunitycardComponent } from './utility/mycommunitycard/mycommunitycard.component';
import { MainhomeComponent } from './components/mainhome/mainhome.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    SearchBarComponent,
    MapsComponent,
    FilterpipePipe,
    ProfileComponent,
    MypostsComponent,
    MycommunityComponent,
    MyreviewComponent,
    CardComponent,
    RatingcardComponent,
    MycommunitycardComponent,
    MainhomeComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDXsrI41fGiRppoVY1aK-e37nZOGpgrRVE'
    }),
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

