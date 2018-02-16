import { Component, Input } from '@angular/core';

@Component({
  selector: 'not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  @Input('message') message: string = 'Not found the page.'

  public testMethod() {
    //alert('test');
  }

}
