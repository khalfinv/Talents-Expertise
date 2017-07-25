import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';

@Component({
  selector: 'app-work-with-people',
  templateUrl: './work-with-people.component.html',
  styleUrls: ['./work-with-people.component.css']
})
export class WorkWithPeopleComponent implements OnInit {
  showHospitalityWrapper: Boolean;
  showServiceWrapper: Boolean;
  showMainContent: Boolean;
  constructor(private globals:GlobalsService) { 
  }

  ngOnInit() {
  }

}
