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

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe((user) => {
      if (user.role === 'ADMIN') {
        this.router.navigate(['/admin-dashboard']);
      } else if (user.role === 'OD') {
        this.router.navigate(['/od-dashboard']);
      } else {
        this.router.navigate(['/cd-dashboard']);
      }
    });
  }
}
