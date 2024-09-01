import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OdDashboardComponent } from './components/od-dashboard/od-dashboard.component';
import { CdDashboardComponent } from './components/cd-dashboard/cd-dashboard.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminDashboardComponent,
    OdDashboardComponent,
    CdDashboardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
  ],
})
export class AppModule {}
