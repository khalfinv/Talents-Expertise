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
  security,
  entertainment,
  writingAndCommunication,
  creation,
  management,
  law,
  marketingAndSales,
  education,
  religion
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
  readonly fieldsImages : string[];
  constructor(private authService:AuthService,
    private router: Router) { 
      console.log("im at globals");
      this.fieldsImages = [];
      this.fieldsImages[subSubCriteria.medicine] = "294c28_b9de5ee990d246dfae38c219eec586aa-mv2_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.science] = "294c28_bdaf28e1124e41ad8c94acaa0bbca2c4-mv2_d_5184_3456_s_4_2_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.socialScience] = "rsz_294c28_779783bc8ee24f24863ba17614808d98-mv2_d_5013_4634_s_4_2";
      this.fieldsImages[subSubCriteria.hospitality] = "teapot-2174333_1920_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.service] = "ibin-siraj-261547_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.technology] = "294c28_8e607e8f21724436affe7b670964f225-mv2_d_5616_3744_s_4_2_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.transport] = "1_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.industry] = "chester-alvarez-644_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.finance] = "294c28_0d55323d0cac40df9072a8cb8bc9867d-mv2_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.humanResource] = "6021688217_5f1faa3c82_b_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.administration] = "294c28_03046c66df654115a7ebe267f60cea62-mv2_Easy-Resize.com";
      this.fieldsImages[subSubCriteria.nature] = "vladimir-kudinov-12755_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.security] = "294c28_f93a6b02d87b44919da2a79626c5f98a-mv2_d_5760_3840_s_4_2-1_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.entertainment] = "ben-white-197668_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.writingAndCommunication] = "narrative-794978_1920_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.creation] = "SplitShire-7268_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.management] = "8692689876_dd606ed4f5_o_Easy-Resize.com";  
      this.fieldsImages[subSubCriteria.law] = "294c28_5469da94b519430c8d3476fa05a0f563-mv2_d_4784_3189_s_4_2_Easy-Resize";  
      this.fieldsImages[subSubCriteria.marketingAndSales] = "294c28_b659e63ee16f4bbca5c70ec285954318-mv2_d_2304_1536_s_2"; 
      this.fieldsImages[subSubCriteria.education] = "8743593650_e6a5d124a9_k_Easy-Resize.com"; 
      this.fieldsImages[subSubCriteria.religion] = "294c28_42b536f058784a5ea7203ecdf664a2ef-mv2_Easy-Resize.com";       
     }

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
