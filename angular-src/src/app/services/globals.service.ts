import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

export enum Criteria {
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
  administration
}

@Injectable()
export class GlobalsService {
  showWrapperWho: Boolean;
  showLoginWrapper: Boolean;
  currentSubJob: Criteria;
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

  setCurrentSubJob(currentSubJob: string){
    console.log(currentSubJob);
    this.currentSubJob = Criteria[currentSubJob];
  }

}
