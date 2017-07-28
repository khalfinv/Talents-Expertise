import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router'; 
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {GlobalsService} from './services/globals.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CareerDevComponent } from './components/career-dev/career-dev.component';
import { SearchJobComponent } from './components/search-job/search-job.component';
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { RecuiterProfileComponent } from './components/recuiter-profile/recuiter-profile.component';
import {CompanyAuthGuard} from './guards/company-auth.guard';
import {CandidateAuthGuard} from './guards/candidate-auth.guard';
import { WorkWithPeopleComponent } from './components/work-with-people/work-with-people.component';
import { RegisterComponent } from './components/register/register.component';
import { IndustryComponent } from './components/industry/industry.component';
import { OrganizationalWorkComponent } from './components/organizational-work/organizational-work.component';
import { ScienceAndMedicineComponent } from './components/science-and-medicine/science-and-medicine.component';
import { SubSubFieldComponent } from './components/sub-sub-field/sub-sub-field.component';
import { OutsideOfficeComponent } from './components/outside-office/outside-office.component';
import { SubFieldComponent } from './components/sub-field/sub-field.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'navbar', component: NavbarComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'career-dev', component: CareerDevComponent},
  {path:'search-job', component: SearchJobComponent},
  {path:'work-with-people', component: WorkWithPeopleComponent},
  {path:'industry', component: IndustryComponent},
  {path:'organizational-work', component: OrganizationalWorkComponent},
  {path:'science-and-medicine', component: ScienceAndMedicineComponent},
  {path:'sub-sub-field', component: SubSubFieldComponent},
  {path:'sub-field', component: SubFieldComponent},
  {path:'candidate-profile', component: CandidateProfileComponent, canActivate:[CandidateAuthGuard]},
  {path:'recuiter-profile', component: RecuiterProfileComponent, canActivate:[CompanyAuthGuard]}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    CareerDevComponent,
    SearchJobComponent,
    CandidateProfileComponent,
    RecuiterProfileComponent,
    WorkWithPeopleComponent,
    RegisterComponent,
    IndustryComponent,
    OrganizationalWorkComponent,
    ScienceAndMedicineComponent,
    SubSubFieldComponent,
    OutsideOfficeComponent,
    SubFieldComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, CandidateAuthGuard, CompanyAuthGuard, GlobalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
