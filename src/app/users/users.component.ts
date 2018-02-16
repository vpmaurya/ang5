import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public data: any = [];
  private actionData: any;
  constructor() { }

  ngOnInit() {
    this.data = {
      "headers":[
         {
            "name":"ID",
            "dataindex":"id",
            "hidden":false,
            "sort":true,
            "type": "string"
         },
         {
            "name":"NAME",
            "dataindex":"name",
            "hidden":false,
            "sort":true,
            "type": "string"
         },
         {
            "name":"STATUS",
            "dataindex":"status",
            "hidden":false,
            "sort":true,
            "type": "string"
         },
         {
            "name":"DESCRIPTION",
            "dataindex":"desc",
            "hidden":false,
            "sort":true,
            "type": "string"
         },
         {
            "name":"ACTIONS",
            "dataindex":"actions",
            "hidden":false,
            "sort":false,
            "type": "actions"
         }
      ],
      "items":[
         {
            "id":"1",
            "name":"IND",
            "status":"In progress",
            "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
         },
         {
            "id":"2",
            "name":"USA",
            "status":"Complete",
            "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
         },
         {
            "id":"3",
            "name":"UK",
            "status":"Revert",
            "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
         },
         {
          "id":"4",
          "name":"IND",
          "status":"In progress",
          "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
       },
       {
          "id":"5",
          "name":"USA",
          "status":"Complete",
          "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
       },
       {
          "id":"6",
          "name":"UK",
          "status":"Revert",
          "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
       },
       {
        "id":"7",
        "name":"IND",
        "status":"In progress",
        "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
     },
     {
        "id":"8",
        "name":"USA",
        "status":"Complete",
        "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
     },
     {
        "id":"9",
        "name":"UK",
        "status":"Revert",
        "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
     },
     {
      "id":"1",
      "name":"IND",
      "status":"In progress",
      "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
   },
   {
      "id":"2",
      "name":"USA",
      "status":"Complete",
      "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
   },
   {
      "id":"3",
      "name":"UK",
      "status":"Revert",
      "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
   },
   {
    "id":"4",
    "name":"IND",
    "status":"In progress",
    "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
 },
 {
    "id":"5",
    "name":"USA",
    "status":"Complete",
    "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
 },
 {
    "id":"6",
    "name":"UK",
    "status":"Revert",
    "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
 },
 {
  "id":"7",
  "name":"IND",
  "status":"In progress",
  "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
},
{
  "id":"8",
  "name":"USA",
  "status":"Complete",
  "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
},
{
  "id":"9",
  "name":"UK",
  "status":"Revert",
  "desc": "sdgsyd yasdyia tsyitd atsidytsai yia stdita"
}                            
      ],
      "actions":[
        {
           name: "Edit",
           id: "edit",
           iconCls: "pencil-square-o",
           context: 'success',
           actionMethod: "editData"
        },
        {
          name: "Delete",
          id: "delete",
          iconCls: "trash-o",
          context: 'danger',
          actionMethod: "deleteData"
       },
       {
         name: "View",
         id: "view",
         iconCls: "file-pdf-o",
         context: 'info',
         actionMethod: "viewData"
      },
      
      ]
   };
  

  }

  performAction(row: any) { 
    this.actionData = row;
  }

}
