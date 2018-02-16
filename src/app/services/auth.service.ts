import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() { }

  get isLoggedIn() {
    return true;
  }
  //with get it can be accessed like this.isLoggedIn; without get this.isLoggedIn()

  get isSuperAdmin() {
    return true;
  }

}
