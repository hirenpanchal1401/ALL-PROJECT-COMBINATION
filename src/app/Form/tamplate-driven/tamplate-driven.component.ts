import { Component, OnInit } from '@angular/core';
import {IUser} from '../Model/iuser.model';

@Component({
  selector: 'app-tamplate-driven',
  templateUrl: './tamplate-driven.component.html',
  styleUrls: ['./tamplate-driven.component.css']
})
export class TamplateDrivenComponent implements OnInit {
  
  user:IUser = new IUser();

  constructor() { }
  
  ngOnInit() {
  }

  OnSubmit()
  {
    if(this.user.uname!=null && this.user.ucity!=null){
    console.log(this.user);
    }
    else{
      alert("please enter proper user info...");
    }
  }

}
