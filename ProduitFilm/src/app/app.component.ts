import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Note: it should be 'styleUrls' instead of 'styleUrl'
})
export class AppComponent implements OnInit {
  title = 'ProduitFilm';

  // Inject AuthService and Router through the constructor
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Ensure loadToken() is called on initialization
    this.authService.loadToken();

    // Check if token is invalid or expired, then redirect to login page
    if (!this.authService.getToken() || this.authService.isTokenExpired()) {
      this.router.navigate(['/login']);
    }
  }
}
