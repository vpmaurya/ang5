import { Component, OnInit, ViewChildren, ViewChild, QueryList, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { NotFoundComponent } from '../shared/not-found/not-found.component';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent{
  
  // @ViewChildren("div") divs: QueryList<any>
  @ViewChild(NotFoundComponent) notFound: NotFoundComponent;
  //@ViewChildren(NotFoundComponent) notFound: NotFoundComponent;

  //constructor(private elemRef: ElementRef) { }
  ngAfterViewInit() {
    console.log(this.notFound.testMethod());
  }

 
}
