import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountHomeComponent } from '../../account/account-home/account-home.component';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<AccountHomeComponent> {

  canDeactivate(component: AccountHomeComponent) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
