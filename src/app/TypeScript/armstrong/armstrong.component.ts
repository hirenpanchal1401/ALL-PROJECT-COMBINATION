import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armstrong',
  templateUrl: './armstrong.component.html',
  styleUrls: ['./armstrong.component.css']
})
export class ArmstrongComponent implements OnInit {

  constructor() { }
  value;

  armstrong()
   {
     let sum:number=0;
     let r:number;
     let t:number=this.value;
     while(this.value>0)
     {
      
      r=this.value%10;
      sum+=(r*r*r);
      this.value=parseInt((this.value/10).toString()); 
     }

     if(t==undefined) 
     {
       return;
     }
     else if(t==sum)
     {
       return t+" is armstrong number";
     }
     else
     {
      return t+" is not armstrong number";
     }
   }
   
  ngOnInit() {
  }

}
