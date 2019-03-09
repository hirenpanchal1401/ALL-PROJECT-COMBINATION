import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibbonaci',
  templateUrl: './fibbonaci.component.html',
  styleUrls: ['./fibbonaci.component.css']
})
export class FibbonaciComponent implements OnInit {

  constructor() { }
  limit;
  
  fibbo(v)
   { 
    if(v==0)
    {
      return;
    }
    if(v==1)
    {
      return [0];
    }
    if(v==2)
    {
      return [0,1];
    }
    let f = this.fibbo(v-1)  //array of function
    f.push(f[f.length-1] + f[f.length-2]);
    return f;
   }

 

  ngOnInit() {
  }

}
