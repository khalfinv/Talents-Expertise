import { Component, OnInit } from '@angular/core';
import {GlobalsService} from '../../services/globals.service';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {

  constructor(private globals:GlobalsService) { }

  ngOnInit() {
  }

}
