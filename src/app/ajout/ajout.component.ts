import { Component, EventEmitter } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})


export class AjoutComponent {
  newEmployee:Employee={
    id: 0, 
    name: '',
    status: '',
    email: '',
    telephone: ''
  };
  

  constructor(private employeeService: EmployeeService) {}

  submitForm() {
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      
      console.log('Employee added successfully');
    });
  }
}


