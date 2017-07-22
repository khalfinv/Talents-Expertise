import {Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showRecruiterWrapper : Boolean;
  showCandidateWrapper : Boolean;
  isCompany : Boolean;
  afterSubmit: Boolean;
  registerFailed: Boolean;
  companyName: String;
  name: String;
  email: String;
  password: String;
  submitText : String;
  constructor(private validateService: ValidateService,
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private router: Router,
    private globals:GlobalsService) {
    this.showCandidateWrapper = false;
    this.showRecruiterWrapper = false;
    this.globals.showWrapperWho = false;
    this.afterSubmit = false;
    this.registerFailed = false;
    this.isCompany = false;
    this.submitText = "הרשמה";
    this.companyName = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
   }

  ngOnInit() {
  }

  restoreToDefault(){
    this.showCandidateWrapper = false;
    this.showRecruiterWrapper = false;
    this.globals.showWrapperWho = false;
    this.afterSubmit = false;
    this.registerFailed = false;
    this.isCompany = false;
    this.submitText = "הרשמה";
    this.companyName = undefined;
    this.name = undefined;
    this.email = undefined;
    this.password = undefined;
  }
  onRegisterSubmit()
  {
    if(!this.isCompany) {
      this.companyName = undefined;
    }
    const user = {
      companyName : this.companyName,
      name: this.name,
      email: this.email,
      password: this.password
    }

      // Required Fields
    if(!this.validateService.validateRegister(user, this.isCompany)){
      this.flashMessage.show('אנא מלא את כל השדות', { timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('אנא הכנס אימייל תקין', { timeout: 3000});
      return false;
    }

    this.afterSubmit = true;
    this.submitText="עוד רגע...";
    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
       this.submitText = "נרשמת בהצלחה!";
       this.authService.storeUserData(data.token, data.user);
       setTimeout(() => {this.restoreToDefault(); this.globals.goToProfile()}, 700);
      } else {
       this.flashMessage.show('המשתמש קיים במערכת. שנה אימייל', { timeout: 3000});
       this.submitText = "הרשמה";
       this.afterSubmit = false;
      }
    });
  }

}
