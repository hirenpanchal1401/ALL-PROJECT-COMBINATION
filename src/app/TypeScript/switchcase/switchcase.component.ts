import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchcase',
  templateUrl: './switchcase.component.html',
  styleUrls: ['./switchcase.component.css']
})
export class SwitchcaseComponent implements OnInit {

  constructor() { }
  first;
  second;
  SwitchCase(n:string)
   { let a:number=parseInt(this.first);
     let b:number=parseInt(this.second);  
     let c:number;
     switch(n)
     {
       case '+': c=a+b;
                 return "sum of "+a+" & "+b+" :"+c;
                 
       case '-': c=a-b;
                 return "difference of "+a+" & "+b+" :"+c;
                
       case '*': c=a*b;
                 return "multiplication of "+a+" & "+b+" :"+c;
               
       case '/' : c=a/b;
                 return "division of "+a+" by "+b+" :"+c;
       
       default  :
                return "Enter valid Operator";          
     }
   }
   
  ngOnInit() {
  }

}
