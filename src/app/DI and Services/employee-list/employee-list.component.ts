import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeelist:EmployeeService) {}


  ngOnInit() {

    this.employees = this._employeelist.getEmployee();
  }

}
