import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './../models/employee';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'ema-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesListComponent implements OnInit {
  @Input('filter') filter: string;
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
