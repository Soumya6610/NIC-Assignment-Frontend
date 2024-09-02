import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const tokenRole = this.authService.getRole();

    if (!this.authService.isAuthenticated() || tokenRole !== expectedRole) {
      this.authService.logout();
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
