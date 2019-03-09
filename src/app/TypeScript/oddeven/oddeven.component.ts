import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oddeven',
  templateUrl: './oddeven.component.html',
  styleUrls: ['./oddeven.component.css']
})
export class OddevenComponent implements OnInit {

  constructor() { }

  OddEven(n:number)
   { 

     if( n%2 == 0)
     {
      return n+" is even";
     }
     else
     {
       return n+" is odd";
     }
   }

  ngOnInit() {
  }

}
