import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

export enum subSubCriteria {
  medicine = 0 ,
  science,
  socialScience,
  hospitality,
  service,
  technology,
  transport,
  industry,
  finance,
  humanResource,
  administration,
  nature,
  security
}

export enum subCriteria {
  workWithPeople = 0 ,
  scienceAndMedicine,
  outSideOffice,
  organizationalWork,
  industry,
  education,
  business,
  creativeWork,
}

@Injectable()
export class GlobalsService {
  showWrapperWho: Boolean;
  showLoginWrapper: Boolean;
  currentSubSubField: subSubCriteria;
  currentSubField: subCriteria;
  constructor(private authService:AuthService,
    private router: Router) {  }

  goToProfile(){
    if(this.authService.companyLoggedIn()){
      this.router.navigate(['/recuiter-profile']);
    }
    else{
      this.router.navigate(['/candidate-profile']);
    }
  }

  setCurrentSubSubJob(currentSubSubJob: string){
    console.log("currentSubSubJob:" + currentSubSubJob);
    this.currentSubSubField = subSubCriteria[currentSubSubJob];
  }
  setCurrentSubJob(currentSubJob: string){
    console.log("currentSubJob: " + currentSubJob);
    this.currentSubField = subCriteria[currentSubJob];
  }

}
