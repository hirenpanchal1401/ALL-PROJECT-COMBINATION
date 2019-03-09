import { Component, OnInit } from '@angular/core';

enum days {sunday=1,monday,tuesday,wednesday,thursday,friday,saturday};

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html',
  styleUrls: ['./enum.component.css']
})
export class EnumComponent implements OnInit {

  constructor() { }

  value:string = "";
  
  EnumEx()
  { 
    let i = 0;
    for(let day in days)
    { 
      i++;
      if(this.value == day || (this.value).toLowerCase() == day)
      {
      return `${this.value} : Day ${i-7} of week`;
      }

    }
  
  }

  ngOnInit() {
  }

}
