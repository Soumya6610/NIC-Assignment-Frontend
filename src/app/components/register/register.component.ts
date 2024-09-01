import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}
