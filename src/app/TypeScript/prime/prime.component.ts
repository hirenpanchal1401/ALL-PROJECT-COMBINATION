import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})
export class PrimeComponent implements OnInit {

  constructor() { }

  isprime(num)
  {
     let status:boolean=true;
     if(num!==2 && num%2==0)
     {
       status=false;
     }
     else
     {
       for(let i=2;i<num;i++)
       {
         if(num%i==0)
         status=false;
         break;
       }
     }
     return status;
  }
  prime(n:number)
  {let primearray:string='';
   let count=0;
   let currentnum = 2;
   let str:string = ',';
   while(count<n)
   {
     if(this.isprime(currentnum))
     { console.log(currentnum);
       primearray+=currentnum+str; 
       count++;
     }
     currentnum++;
   }
   return primearray;
  }

  ngOnInit() {
  }

}
