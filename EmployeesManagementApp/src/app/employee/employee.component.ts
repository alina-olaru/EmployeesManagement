import { Employee } from './../../models/employee';
import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @Input('Employee') employee: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.employee);
  }

}
