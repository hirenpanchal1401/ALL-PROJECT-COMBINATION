import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }

  // json object

  studentList: any[] =
    [
      {
        "sid": 1, "sname": "yogesh", "scity": "nadiad","smarks":"35",
        "hobbies": ["cricket", "football", "chess","sadsa"]
      },
      {
        "sid": 2, "sname": "hiren", "scity": "nadiad","smarks":44,
        "hobbies": ["cricket", "football", "chess","sdasd","sadsadA"]
      }
      , {
        "sid": 3, "sname": "ayushi", "scity": "nadiad","smarks":30,
        "hobbies": ["cricket", "games", "chess"]
      }
    ];

  ngOnInit() {
  }

}
