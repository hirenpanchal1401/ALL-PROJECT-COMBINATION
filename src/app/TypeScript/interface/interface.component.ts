import { Component, OnInit } from '@angular/core';
import { Child } from '../interface/Model/interface.model';
import { Array } from '../interface/Model/interface.model';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
   //Interface example
   Child1 = new Child();

   //Interface
   Array1 = new Array();

   constructor() { }

  ngOnInit() {
  }

}
