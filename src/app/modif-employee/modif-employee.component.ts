import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-modif-employee',
  templateUrl: './modif-employee.component.html',
  styleUrls: ['./modif-employee.component.css']
})
export class ModifEmployeeComponent implements OnInit {
  employee: Employee = { id: 0, name: '', status: '', email: '', telephone: '' };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    // Retrieve employee details based on the route parameter
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      const id = +idParam;
      this.employeeService.getEmployeeById(id).subscribe((employee) => {
        this.employee = employee;
      });
    } else {
      console.error('Employee ID is null.');
      // Handle the case where the employee ID is null, e.g., navigate to an error page
    }
  }

  updateEmployee(): void {
    this.employeeService.updateEmployee(this.employee).subscribe(() => {
      // Handle successful update, e.g., navigate to employee list
    });
  }
}
