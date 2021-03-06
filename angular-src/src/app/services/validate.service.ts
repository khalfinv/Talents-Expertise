import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user, isCompany){
    if(user.email == undefined || user.name == undefined || user.password == undefined){
      return false;
    } else if((isCompany == true) && (user.companyName == undefined)){
      return false;
    }else{
      return true;
    }
  }

  validateLogin(user){
    if(user.email == undefined || user.password == undefined ){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
