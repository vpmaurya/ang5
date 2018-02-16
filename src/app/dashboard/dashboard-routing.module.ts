import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { SuperDuperComponent } from './super-duper/super-duper.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: DashboardHomeComponent,
  canActivate: [AdminGuard, AuthGuard],
  canActivateChild: [AdminGuard],
  data: {breadcrumb: "Dashboard"},
  children: [{
    path: 'super',
    component: SuperDuperComponent,
    data: {breadcrumb: "Super"} 
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
