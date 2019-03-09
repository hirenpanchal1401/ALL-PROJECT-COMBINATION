import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }
  
  firstname = "";
  lastname = "";
  username : string[] = [];
  addUserInfo(fname,lname)
    {
      this.firstname = "";
      this.lastname = ""; 
        this.username.push(fname + " " + lname);     
    }

  ngOnInit() {
  }

}
