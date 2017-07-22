import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class GlobalsService {
  showWrapperWho: Boolean;
  showLoginWrapper: Boolean;
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

}
