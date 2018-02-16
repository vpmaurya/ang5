import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QueryService {

  constructor(private http:HttpClient) { }

  getUserData() {
    return this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
        console.log(data);
        return data;
      });
    }
}
