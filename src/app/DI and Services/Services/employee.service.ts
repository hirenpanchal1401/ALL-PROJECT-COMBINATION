import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 

  getEmployee()
  {
    return [
      { "id": 1 , "name":"Hiren" , "college":"L D College Of Engineering" },
      { "id": 2 , "name":"Vaibhav" , "college":"AIT" },
      { "id": 3 , "name":"Jemmy" , "college":"Silver Oak"},
      { "id": 4 , "name":"Keyur" , "college":"DAIICT"}
    ];
  }

  constructor() { }


}
