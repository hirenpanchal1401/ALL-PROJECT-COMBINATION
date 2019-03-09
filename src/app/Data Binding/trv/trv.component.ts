import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trv',
  templateUrl: './trv.component.html',
  styleUrls: ['./trv.component.css']
})
export class TrvComponent implements OnInit {

  constructor() { }
  logmsg(value)
  {
    console.log(value);
  }

  ngOnInit() {
  }

}
