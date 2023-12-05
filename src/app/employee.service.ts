import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Employee } from './employee';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,private router: Router) { }

  public getEmployees(): Observable<Employee[]> {
    const url = 'http://localhost:3000/employees';
    return this.http.get<Employee[]>(url);
  }

  addEmployee(newEmployee: Employee): Observable<Employee[]> {
    const url = 'http://localhost:3000/employees';
    console.log('Adding employee...');
    
    return this.http.post<Employee[]>(url, newEmployee).pipe(
      tap(() => {
          this.router.navigate(['']);
         
        })
      
    );
  }

  deleteEmployee(id: number): Observable<Employee[]> {
    const url = `http://localhost:3000/employees/${id}`;
    window.location.reload();
    return this.http.delete<Employee[]>(url);
  }
   // employee.service.ts
   public updateEmployee(updatedEmployee: Employee): Observable<Employee> {
    const url = `http://localhost:3000/employees/${updatedEmployee.id}`;
    
    return this.http.put<Employee>(url, updatedEmployee).pipe(
      tap(() => {
          this.router.navigate(['']);
          
        }));
  }
  public getEmployeeById(id: number): Observable<Employee> {
    const url = `http://localhost:3000/employees/${id}`;
    return this.http.get<Employee>(url);
  }



}

