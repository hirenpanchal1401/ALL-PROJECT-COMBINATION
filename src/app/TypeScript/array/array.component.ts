import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {

  constructor() { }
     //arr = +prompt("Enter numbers separated by comma").split(",");
  ArrayOddEven()
  {
    let a:number[]=[11,6,2,9,1,44,29,3,19];
    let e:number=0;
    let o:number=0;
    let ecount:number=0;
    let ocount:number=0;
    for(let i=0;i<a.length;++i)
    {
     if( a[i]%2 == 0)
     {
      e+=a[i];
      ecount++;
     }
     else
     {
      o+=a[i];
      ocount++;
     }
    }

    return "Even: "+ecount+" & Sum of even number:"+e+" & Odd: "+ocount+" & Sum of odd number:"+o;
  }

  ArrayReverse()
  {
    let a:number[]=[1,3,6,2,8];
    let j:number=a.length-1;
    let i:number=0;
    let temp:number;
    while(i<j)
    {
       temp=a[i];
       a[i]=a[j];
       a[j]=temp;
       i++;
       j--;
    }
    return a;
  }


  ngOnInit() {
  }

}
