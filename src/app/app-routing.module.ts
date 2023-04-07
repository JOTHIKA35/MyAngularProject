import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsearchingComponent } from './carsearching/carsearching.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'carsearch',
    component:CarsearchingComponent
  },
  {
    path:'car-details',
    component:CarDetailsComponent
  },
  {
    path:'details',
    component:DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
