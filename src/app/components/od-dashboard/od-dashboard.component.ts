import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-od-dashboard',
  templateUrl: './od-dashboard.component.html',
  styleUrl: './od-dashboard.component.css',
})
export class OdDashboardComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
