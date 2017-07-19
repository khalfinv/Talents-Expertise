import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { JobSearchRegisterComponent } from './components/job-search-register/job-search-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareerDevComponent } from './components/career-dev/career-dev.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { RecuiterProfileComponent } from './components/recuiter-profile/recuiter-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import {CompanyAuthGuard} from './guards/company-auth.guard';
import {CandidateAuthGuard} from './guards/candidate-auth.guard';
import { WorkWithPeopleComponent } from './components/work-with-people/work-with-people.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'job-search-register', component: JobSearchRegisterComponent},
  {path:'company-register', component: CompanyRegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'career-dev', component: CareerDevComponent},
  {path:'search-job', component: SearchJobComponent},
  {path:'work-with-people', component: WorkWithPeopleComponent},
  {path:'candidate-profile', component: CandidateProfileComponent, canActivate:[CandidateAuthGuard]},
  {path:'recuiter-profile', component: RecuiterProfileComponent, canActivate:[CompanyAuthGuard]}

]
@NgModule({
  declarations: [
    AppComponent,
    JobSearchRegisterComponent,
    CompanyRegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CareerDevComponent,
    SearchJobComponent,
    CandidateProfileComponent,
    RecuiterProfileComponent,
    ProfileComponent,
    WorkWithPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, CandidateAuthGuard, CompanyAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
