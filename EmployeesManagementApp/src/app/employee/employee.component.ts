import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { ConfirmDialogService } from './../shared/confirm-dialog/confirm-dialog.service';
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

  constructor(private confirmDialogService: ConfirmDialogService) {

  }

  ngOnInit(): void {
    console.log(this.employee);
  }

  DeleteEmployee(){
    this.confirmDialogService.OpenModal(
      {
        title: "Delete Employee",
        content: `Are you sure that you want to delete <b>${this.employee.FirstName} - ${this.employee.SecondName}</b>?`,
        deleteText: "Delete",
        dismissText: "Cancel"
      } as ConfirmDialogData
    ).subscribe(response => {
      console.log(response);
    })
  }
}
