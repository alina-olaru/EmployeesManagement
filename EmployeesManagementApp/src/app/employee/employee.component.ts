import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { ConfirmDialogService } from './../shared/confirm-dialog/confirm-dialog.service';
import { Employee } from './../models/employee';
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ConfirmDialogType } from '../models/confirm-dialog-type.enum';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  @Input('employee') employee: Employee;
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter<
    Employee
  >();
  description: SafeHtml;

  constructor(
    private confirmDialogService: ConfirmDialogService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.description = this.sanitizer.bypassSecurityTrustHtml(this.employee.Details);
  }

  DeleteEmployee() {
    let deleteSubscription = this.confirmDialogService
      .OpenModal({
        title: 'Delete Employee',
        content: `Are you sure that you want to delete <b>${this.employee.FirstName} - ${this.employee.SecondName}</b>?`,
        deleteText: 'Delete',
        dismissText: 'Cancel',
      } as ConfirmDialogData)
      .subscribe((response) => {
        if (response) {
          if (response == ConfirmDialogType.CLOSE) {
            this.deleteEmployee.emit(this.employee);
          }
          deleteSubscription.unsubscribe();
        }
      });
  }
}
