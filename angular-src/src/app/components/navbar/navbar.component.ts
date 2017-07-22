import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {GlobalsService} from '../../services/globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private globals:GlobalsService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.router.navigate(['/']);
    return false;
  }
}
