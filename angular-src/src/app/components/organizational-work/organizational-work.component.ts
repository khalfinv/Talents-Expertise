import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizational-work',
  templateUrl: './organizational-work.component.html',
  styleUrls: ['./organizational-work.component.css']
})
export class OrganizationalWorkComponent implements OnInit {
  showHumanResourcesWrapper: Boolean;
  showFinanceWrapper: Boolean;
  showAdministrationWrapper: Boolean;
  constructor() { }

  ngOnInit() {
  }

}
