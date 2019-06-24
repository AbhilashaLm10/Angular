import { Component,ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { HeaderComponent } from'./header/header.component';
import { EmployeeService } from './employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 //template:'<h1> welcome to Angular</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  title = 'ecoApp';
  @ViewChild(HeaderComponent) headerComponent : HeaderComponent;
constructor(private empService :EmployeeService){ }
ngOnInit(){
}
addEmployee()
{
  this.empService.addEmployee();
}
ngAfterViewInit(){
  this.headerComponent.header=`Good Morning !! Welcome to ${this.title}`;
}
}

