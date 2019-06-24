import { Component, OnInit,DoCheck,Self } from '@angular/core';
import {IEmployee} from'./iemployee';
import{EmployeeService} from'./employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit,DoCheck,Self {

  empname= 'Amit';
  department='Mechanical';
  empDetail:IEmployee={
    age:34,
    id:5,
    name:'Osan'
  };

  list:Array<IEmployee>=[];
    

  isValid=false;
  constructor(@Self() private empService:EmployeeService) { }

  ngOnInit(){
    this.list=this.empService.getEmployeeList();

  }
  ngDoCheck()
  {
    console.log('Change event is Called');
  }
 
    
  
  refresh()
  {
    this.list=[
      {
        age:4,
        id:1,
        name:'Yuvi'
      },
      {
        age:7,
        id:7,
        name:'More'
      }
    ];

    
  }
toggle()
{
  this.isValid=!this.isValid;
}

receiveFromChild(employee:IEmployee)
{
  console.log(employee);
}
}
