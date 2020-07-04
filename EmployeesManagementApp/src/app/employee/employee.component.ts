import { Employee } from './../models/employee';
import { Component, OnInit, Input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  @Input('employee') employee: Employee;
  description: SafeHtml;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.employee);
  }
}
