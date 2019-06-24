import { Component, OnInit ,Input, Output, EventEmitter,OnChanges, SimpleChanges} 
from '@angular/core';
import { IEmployee} from '../iemployee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnChanges {

 @Input() empDetail:IEmployee;
 @Input() empList:Array<IEmployee>;
 @Output() selectdEmployee= new EventEmitter<IEmployee>(); 
  //create event for output send for parent from child 
  constructor() { }

  ngOnChanges(changes :SimpleChanges):void{
    console.log(changes);
  }
  ngOnInit() {
  }

  sendToParent(employee:IEmployee){
    this.selectdEmployee.emit(employee);

    console.log(employee);
  }
}
