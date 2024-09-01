import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cd-dashboard',
  templateUrl: './cd-dashboard.component.html',
  styleUrl: './cd-dashboard.component.css',
})
export class CdDashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
