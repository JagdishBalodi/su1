import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const homeRoute: Route = { path: 'home-page', component: HomePageComponent }
const defaultRoute: Route = { path: '', redirectTo: '/home-page', pathMatch: 'full' }
const loginRoute: Route ={path:'login', component: LoginComponent}
const registrationRoute:Route={path:'registration',component:RegistrationComponent}
const resetPasswordRoute:Route={path:'reset-password',component:ResetPasswordComponent}
const pageNotFoundRoute: Route= {path:'**',component:NotFoundComponent}

const routes: Routes = [defaultRoute,homeRoute,loginRoute,registrationRoute,resetPasswordRoute,pageNotFoundRoute];


RouterModule.forRoot(routes)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
