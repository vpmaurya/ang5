import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountResolveService implements Resolve<any> {
  private users: User[];
  constructor(private userService: UserService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    console.log('resolving user service');
    return this.userService.getUsers().map(users => users)
  }


}
