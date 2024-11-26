import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // corrected
})
export class RegisterComponent implements OnInit {

  public user = new User();
  confirmPassword?: string;
  myForm!: FormGroup;
  err: string | undefined; // Added err property to display error messages

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { } // Injected Router

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  onRegister() {
    this.authService.registerUser(this.user).subscribe({
      next: (res) => {
        alert("Please confirm your email");
        this.router.navigate(["/verifEmail", this.user.email]); // corrected navigation
      },
      error: (err: any) => {
        if (err.status === 400) { // corrected comparison
          this.err = err.error.message;
        }
      }
    });
  }
}
