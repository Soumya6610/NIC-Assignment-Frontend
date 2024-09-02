import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { OdDashboardComponent } from './components/od-dashboard/od-dashboard.component';
import { CdDashboardComponent } from './components/cd-dashboard/cd-dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'ADMIN' },
  },
  {
    path: 'od-dashboard',
    component: OdDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'OD' },
  },
  {
    path: 'cd-dashboard',
    component: CdDashboardComponent,
    canActivate: [AuthGuard],
    data: { role: 'CD' },
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
