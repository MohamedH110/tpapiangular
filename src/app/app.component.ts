import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 title = 'tpapi';

  employees = new Array<Employee>();
emp: any;
  
  constructor( private empService:EmployeeService ) {
  empService.getEmployees().subscribe(response => this.employees = response )
  }
  
  delEmployee(id:number) {
    console.log(id);
    this.empService.deleteEmployee(id).subscribe(response => {
     console.log(`Employee with ID ${id} deleted successfully.`);
    });}
  

 
}
