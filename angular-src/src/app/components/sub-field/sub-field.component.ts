import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';
import {subCriteria} from '../../services/globals.service';
import {subSubCriteria} from '../../services/globals.service';

@Component({
  selector: 'app-sub-field',
  templateUrl: './sub-field.component.html',
  styleUrls: ['./sub-field.component.css']
})
export class SubFieldComponent implements OnInit {
  subFields: Map<subCriteria,any>;
  constructor(private globals:GlobalsService) { 
    this.subFields = new Map;
    this.subFields[subCriteria.workWithPeople] = [
    {
      image : "ibin-siraj-261547_Easy-Resize.com",
      name : "שירות",
      subSubField: subSubCriteria.service 
    },
    {
      image : "teapot-2174333_1920_Easy-Resize.com",
      name : "אירוח וניקיון",
      subSubField: subSubCriteria.hospitality 
    },   
    ]
    this.subFields[subCriteria.industry] = [
    {
      image : "chester-alvarez-644_Easy-Resize.com",
      name : "ייצור בנייה ואחזקה",
      subSubField: subSubCriteria.industry 
    },
    {
      image : "294c28_8e607e8f21724436affe7b670964f225-mv2_d_5616_3744_s_4_2_Easy-Resize.com",
      name : "טכנולוגיה",
      subSubField: subSubCriteria.technology 
    },
    {
      image : "1_Easy-Resize.com",
      name : "תחבורה, שליחים ורכב",
      subSubField: subSubCriteria.transport 
    }, 
    ]
  }

  ngOnInit() {
  }

}
