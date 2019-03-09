import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Model/iemployee.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  selectedRadioButtonValue:string = "All";

  emps: IEmployee[] = [
    { eid: 1, enmae: "yogesh", ecity: "nadiad", egender: "Male" },
    { eid: 2, enmae: "hiren", ecity: "ahmedabad", egender: "Male" },
    { eid: 3, enmae: "rakshita", ecity: "surat", egender: "Female" },
    { eid: 4, enmae: "mayuri", ecity: "vapi", egender: "Female" },
    { eid: 5, enmae: "jaspreet", ecity: "anand", egender: "Female" },
    { eid: 6, enmae: "ayushi", ecity: "kapadvanj", egender: "Male" }
  ];

  getAllEmployee(): number {
    return this.emps.length;
  }

  getMaleEmployee():number{
    return this.emps.filter(a=>a.egender == "Male").length;
  }

  getFemaleEmployee():number{
    return this.emps.filter(a=>a.egender == "Female").length;
  }


  countButtonCall(selectValue:string):void
  {
        this.selectedRadioButtonValue = selectValue;
  }

  ngOnInit() {
  }

}
