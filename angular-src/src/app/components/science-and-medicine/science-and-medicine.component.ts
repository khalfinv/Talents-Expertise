import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';

@Component({
  selector: 'app-science-and-medicine',
  templateUrl: './science-and-medicine.component.html',
  styleUrls: ['./science-and-medicine.component.css']
})
export class ScienceAndMedicineComponent implements OnInit {
  showMedicineWrapper: Boolean;
  showScienceWrapper: Boolean;
  showSocialScience: Boolean;
  constructor(private globals:GlobalsService) { }

  ngOnInit() {
  }

}
