import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import the auth service here
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {

   // add the service we need
   constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('is Super Admin - CanActivate ', this.auth.isSuperAdmin)
      // handle any redirects if a user isn't authenticated
      if (!this.auth.isSuperAdmin) {
        // redirect the user
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('is Super Admin - CanActivateChild ', this.auth.isSuperAdmin)
      // handle any redirects if a user isn't authenticated
      if (!this.auth.isSuperAdmin) {
        // redirect the user
        this.router.navigate(['/login']);
        return false;
      }
      return true;
  }

}
