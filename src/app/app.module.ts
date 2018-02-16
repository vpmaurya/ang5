import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BusyModule } from 'angular2-busy';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SportComponent } from './sport/sport.component';
import { LoginComponent } from './shared/login/login.component';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { AdminGuard } from './auth/guards/admin.guard';
import { CanDeactivateGuard } from './auth/guards/can-deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SegTableComponent } from './shared/seg-table/seg-table.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SignupComponent } from './shared/signup/signup.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'sport', component: SportComponent, pathMatch: 'full', canActivate: [AuthGuard], data: {breadcrumb: "Sport"}},
  {path: 'users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuard], data: {breadcrumb: "Users"}},
  {path: 'users/:id', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, data: {breadcrumb: "Login"} },  
  {path: 'signup', component: SignupComponent, data: {breadcrumb: "SignUp"} },
  {
    path: 'account',
    loadChildren: 'app/account/account.module#AccountModule'    
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
    //not importing in header, coz its lazy loading, will be loaded once it is called
  },
  { path: '**', component:  NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SportComponent,
    LoginComponent,
    NotFoundComponent,
    SegTableComponent,
    BreadcrumbComponent,
    SignupComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false, useHash: false } // <-- debugging purposes only
    ),
    HttpClientModule,
    HttpModule,
    BusyModule
    // other imports here
   
  ],
  providers: [
    AuthService, 
    UserService,
    AuthGuard,
    AdminGuard,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
