import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private employeesSubject: BehaviorSubject<Employee[]>;

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData() {
    this.employeesSubject = new BehaviorSubject(
      new Array<Employee>()
    ) as BehaviorSubject<Employee[]>;
    let localStorageData = localStorage.getItem('employees');
    if (localStorageData) {
      this.employeesSubject.next(JSON.parse(localStorageData) as Employee[]);
    } else {
      this.http
        .get<Employee[]>('../../assets/employees.json')
        .subscribe((data: Employee[]) => {
          console.log('in fetch data' + data);
          this.employeesSubject.next(data);
        }),
        (error) => console.log(error);
    }
  }

  subscribeToEmployees(): Observable<Employee[]> {
    return this.employeesSubject.asObservable();
  }

  deleteEmployee(employee: Employee) {
    let employees: Employee[] = this.employeesSubject.getValue();
    employees = employees.filter((e) => e.Id != employee.Id);

    if (employees.length > 0) {
      localStorage.setItem('employees', JSON.stringify(employees));
    } else {
      localStorage.removeItem('employees');
    }

    this.employeesSubject.next(employees);


  }
}
