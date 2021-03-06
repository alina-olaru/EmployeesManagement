import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
      this.employeesSubject.next(employees);
    } else {
      localStorage.removeItem('employees');
      this.employeesSubject.next(null);
      this.http
      .get<Employee[]>('../../assets/employees.json')
      .subscribe((data: Employee[]) => {
        console.log('in fetch data' + data);
        this.employeesSubject.next(data);
      }),
      (error) => console.log(error);
    }


  }

  getEmployee(id: string): Observable<Employee> {
    return this.subscribeToEmployees().pipe(
      map((employees) => employees.find((emp) => emp.Id == id))
    );
  }

  updateEmployee(employee: Employee): boolean {

    let employees: Employee[] = this.employeesSubject.getValue();
    let idx = employees.map((e) => e.Id).indexOf(employee.Id);
    if (idx >= 0) {
      employees[idx].Position = employee.Position;
      localStorage.setItem('employees', JSON.stringify(employees));
      this.employeesSubject.next(employees);
      return true;
    }
    return false;
  }
}
