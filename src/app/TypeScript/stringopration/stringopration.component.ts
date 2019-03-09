import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringopration',
  templateUrl: './stringopration.component.html',
  styleUrls: ['./stringopration.component.css']
})
export class StringoprationComponent implements OnInit {

  constructor() { }

  MyName(fn:string,ln:string):string
  {
    return fn+" "+ln;
  }

  reverse(str)
  {
    let str1:string = '';
    for(let i = str.length-1;i>=0;i--)
    { 
      str1 += str[i];
    }
     return str1;
  }


  grammer(str)
   {
     let v:number = 0;
     let c:number = 0;
     for(let i=0;i<str.length;++i)
     {
       if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' || str[i]==='A' || str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i]==='U')
       {
         ++v;
       }
       else
       {
         ++c;
       }
     }
     return "vowel:"+v+" consonent:"+c;
   }

  ngOnInit() {
  }

}
