import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  constructor() { }
  principal;
  rate;
  year;

  SimpleInt(p,r,y):number
   { 
    let SI = p.value*r.value*y.value/100;
    return SI;
   }

  ngOnInit() {
  }

}
