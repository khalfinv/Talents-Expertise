import {Component, OnInit} from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {AuthService} from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: String;
  password: String;
  submitText: String;
  afterSubmit: Boolean;
  constructor(private globals:GlobalsService, 
    private flashMessage:FlashMessagesService,
    private authService:AuthService,
    private validateService: ValidateService) { 
      this.submitText = "התחברות";
      this.afterSubmit = false;
    }

  ngOnInit() {
  }
  restoreToDefault(){
    this.globals.showLoginWrapper = false;
    this.afterSubmit = false;
    this.submitText = "התחברות";
    this.email = undefined;
    this.password = undefined;
  }

  onLoginSubmit(){
    const user = {
      email: this.email,
      password: this.password
    }
      // Required Fields
    if(!this.validateService.validateLogin(user)){
      console.log(user.email);
      console.log(user.password);
      this.flashMessage.show('אנא מלא את כל השדות', { timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('אנא הכנס אימייל תקין', { timeout: 3000});
      return false;
    }
    this.submitText="עוד רגע...";
    this.afterSubmit = true;
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.submitText = "אתה מחובר למערכת!";
        this.authService.storeUserData(data.token, data.user);
        setTimeout(() => {this.restoreToDefault(); this.globals.goToProfile()}, 700);
        
      } else {
        this.flashMessage.show(data.msg, { timeout: 3000});
        this.submitText = "התחברות";
        this.afterSubmit = false;
      }
    });
  }
}
