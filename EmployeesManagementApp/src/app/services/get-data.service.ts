import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  employees: BehaviorSubject<Employee[]>;

constructor(private http: HttpClient) {
  this.fetchData();
 }


fetchData() {
  this.employees = ( new BehaviorSubject(new Array<Employee>()) as BehaviorSubject<Employee[]>);
  this.http.get<Employee[]>('../../assets/employees.json').subscribe((data: Employee[]) => {
    console.log("in fetch data" + data);
    this.employees.next(data);
  }),
  error => console.log(error);
}

subscribeToEmployees(): Observable<Employee[]>{
  return this.employees.asObservable();
}

}
