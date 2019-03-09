import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
     //Example of ngStyle 
     tclr='';
     bclr='';
     ff='';
     fs='';
     
   changestyle()
   {
     let st={
       'color':this.tclr,
       'background-color':this.bclr,
       'font-family':this.ff,
       'font-style':this.fs
     };  
     return st;  
   }
  constructor() { }

  ngOnInit() {
  }

}
