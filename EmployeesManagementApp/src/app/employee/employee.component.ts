import { Employee } from './../models/employee';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(1500)),
  ]),],
  changeDetection: ChangeDetectionStrategy.OnPush
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
