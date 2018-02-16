import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {
  private users: any;
  constructor(private route: ActivatedRoute) {
    this.users = this.route.snapshot.data['users'];
    console.log(this.users);
   }

  ngOnInit() {
    console.log('initialize account');
  }

  canDeactivate() {
    console.log('i am navigating away');    
    return window.confirm('Discard changes?'); 

   }

}
