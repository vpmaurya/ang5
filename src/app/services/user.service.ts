import { Injectable } from '@angular/core';
import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map((data: Response) => <User[]> data.json())
  }

  getUser(id) {
    //return this.userPromise.then(users => users.find(user => user.login === login));  
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .map((data: Response) => <User[]> data.json().find(data => data.id === id) )
  }

}
