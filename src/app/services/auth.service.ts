import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:8585/api/auth';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {}

  register(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, { email, password });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('jwt');
    return !this.jwtHelper.isTokenExpired(token);
  }

  getRole(): string {
    const token = localStorage.getItem('jwt');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.role;
    }
    return '';
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('role');

    this.router.navigate(['/login']);
  }
}
