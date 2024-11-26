import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verif-email',
  templateUrl: './verif-email.component.html',
  styleUrls: ['./verif-email.component.css'] // Corrected to styleUrls
})
export class VerifEmailComponent implements OnInit { // Added OnInit implementation
  code: string = "";
  user: User = new User();
  err: string = "";

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.authService.regitredUser; // Corrected property name
  }

  onValidateEmail() {
    this.authService.validateEmail(this.code).subscribe({
      next: (res) => {
        alert('Login successful');
        this.authService.login(this.user).subscribe({
          next: (data) => {
            let jwToken = data.headers.get('Authorization')!;
            this.authService.saveToken(jwToken);
            this.router.navigate(['/']);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      },
      error: (err: any) => {
        if (err.status === 400) { // Corrected comparison
          this.err = err.error.message;
        }
        console.log(err.errorCode ?? "Unknown error code"); // Optional chaining for safety
      }
    });
  }
}
