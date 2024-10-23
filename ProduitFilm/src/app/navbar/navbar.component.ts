import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  host: { 'ngSkipHydration': '' } 
})
export class NavbarComponent {
  constructor (public authService: AuthService) {}


}
