import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
    role: 'OD',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe(response => {
      console.log('User registerd successfully');
      this.router.navigate(['/login']);
    });
  }
}
