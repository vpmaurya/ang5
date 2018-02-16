import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountHomeComponent } from './account-home/account-home.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AccountResolveService } from '../services/account-resolve.service';
import { CanDeactivateGuard } from '../auth/guards/can-deactivate.guard';


const routes: Routes = [{
  path: '',
  component: AccountHomeComponent,
  resolve: {
     users: AccountResolveService
  },
  canActivate: [AuthGuard],
  canDeactivate: [CanDeactivateGuard],
  data: {breadcrumb: "Account"}
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AccountResolveService],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
