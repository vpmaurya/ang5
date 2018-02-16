import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TableData {
  headers: any;
  items: any;
  actions?: any;
}

@Component({
  selector: 'seg-table',
  templateUrl: './seg-table.component.html',
  styleUrls: ['./seg-table.component.css']
})

export class SegTableComponent implements OnInit {

  @Input('tableData') tableData: TableData;
  @Output('rowClickData') rowClickData: EventEmitter<any> = new EventEmitter<any>();
 
  clickAction(actionName: string, rowId: string) {
    this.rowClickData.emit({ actionName: actionName, rowId: rowId});
  }

  constructor() {
    console.log(`constructor - data is ${this.tableData}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.tableData}`);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.tableData}`);
  }

  ngDoCheck() {
    console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
