import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        localStorage.setItem('jwt', response.jwt);
        const role = this.authService.getRole();
        console.log(role);
        if (role === 'ADMIN') {
          this.router.navigate(['/admin-dashboard']);
        } else if (role === 'CD') {
          this.router.navigate(['/cd-dashboard']);
        } else if (role === 'OD') {
          this.router.navigate(['/od-dashboard']);
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      },
      complete: () => {
        console.log('Login request complete');
      },
    });
  }
}
