import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host: { 'ngSkipHydration': '' } 
})
export class NavbarComponent {


  constructor (public authService: AuthService,private router :Router) {}
  onLogout() {
    this.authService.logout();
  }
}
