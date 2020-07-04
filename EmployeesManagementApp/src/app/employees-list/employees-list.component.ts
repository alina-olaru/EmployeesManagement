import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../models/employee';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'ema-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
})
export class EmployeesListComponent implements OnInit {
  employees: Observable<Employee[]>;
  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employees = this.getDataService.subscribeToEmployees();
    console.log(this.employees);
    console.log(this.employees.subscribe());
  }
}
