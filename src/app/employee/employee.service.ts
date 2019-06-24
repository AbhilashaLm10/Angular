import { Injectable } from '@angular/core';
import{IEmployee} from'./iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  list:Array<IEmployee>=[];
  constructor() { }
  getEmployeeList():Array<IEmployee>{
    return this.list=[
      {
        age:34,
        id:1,
        name:'Pogo'
      },
      {
        age:67,
        id:7,
        name:'Shizuka'
      }
    ];

  }
  addEmployee()
  {
    this.list.push(
      {
        age:23,
        id:10,
        name:'Chandni'
      }

    );
  }
  
}
