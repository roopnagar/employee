import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPLOYEES } from '../mock-data';
import { Employee } from '../Data';
import {  Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:4201/employees";

  constructor(private http: HttpClient) { }
  deleteEmployee(employee: Employee): Observable<Employee>{
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl);
  }
  addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions);
  }

}
