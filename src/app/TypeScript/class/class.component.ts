import { Component, OnInit } from '@angular/core';
import { Student } from '../class/Model/student.model';
import { ParfectNumber } from '../class/Model/parfect-number.model';
import { Rect } from '../class/Model/rect.model';
import { Details } from '../class/Model/laptop.model';
import { JavaFaculty } from '../class/Model/inheritance.model'; 
import { PHPFaculty } from '../class/Model/inheritance.model';
import { Jeep } from '../class/Model/inheritance.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

    //Student details
    stud1 = new Student(1,"Sikander");
    stud2 = new Student(2,"Virat Kohli");
    stud3 = new Student(3,"Hiren");

    //ParfectNumber class
    parfectnumber = new ParfectNumber(133);

    //Simple Class Example
    Rect1 = new Rect(5,10);

    //laptop details
  laptop1 =  new Details("Lenovo G50-80",35000,"Intel Core i3 Processor (5th Gen)","4 GB DDR3 RAM","1 TB HDD");
  laptop2 =  new Details("MSI Dominator Pro",205000,"Intel Core i7 Processor (4th Gen)","8 GB DDR3 RAM","1 TB HDD");

    //Inheritance example
  java = new JavaFaculty();
  php = new PHPFaculty();

   //car example
   Car = new Jeep("4 stroke","MRF",true);

  constructor() { }



  ngOnInit() {
  }

}
