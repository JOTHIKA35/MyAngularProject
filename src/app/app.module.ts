import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterpartComponent } from './footerpart/footerpart.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarsearchingComponent } from './carsearching/carsearching.component';
import { SliderComponent } from './slider/slider.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarDetailsComponent } from './car-details/car-details.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FilterComponent } from './filter/filter.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SlideComponent } from './slide/slide.component';
import { DetailsComponent } from './details/details.component';
import { SliderDirective } from './slider.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterpartComponent,
      CopyrightsComponent,
      CarsearchingComponent,
      SliderComponent,
      CarDetailsComponent,
      SearchbarComponent,
      FilterComponent,
      SlideComponent,
      DetailsComponent,
      SliderDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule, MatFormFieldModule,BrowserAnimationsModule,CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
