import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.css']
})
export class IndustryComponent implements OnInit {
  showTechnologyWrapper: Boolean;
  showTransportWrapper: Boolean;
  showConstructWrapper: Boolean;
  constructor(private globals:GlobalsService) { }

  ngOnInit() {
  }

}
