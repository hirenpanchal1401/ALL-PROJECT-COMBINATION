import { Component, OnInit } from '@angular/core';
import { empty } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit{

  constructor() { }
  palindrom;
    
  
  palindrome(v)
   {
     let r:number=0;
     let t:number=v;
     
     while(t!=0)
     {
       r=r*10;
       r=r+(t%10);
       t=parseInt((t/10).toString());
     }
     
     if(v==null)
     {
      return;
     }
    else if(v==r)
     {
       return v+" is palindrome";
     }
     else
     {
      return v+" is not palindrome";
     }
    }
    
    
    ngOnInit() {
    }

}
