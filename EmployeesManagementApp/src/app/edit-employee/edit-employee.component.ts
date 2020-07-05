import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Observable, timer } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employeeId: string;
  employee$: Observable<Employee>;
  employee: Employee;
  description: SafeHtml;
  position: FormControl;
  updateStatus: boolean = true;
  countdown: number = 0;
  constructor(
    private route: ActivatedRoute,
    private getDataService: GetDataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.employee$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.getDataService.getEmployee(params.get('id'))
      )
    );

    this.employee$.subscribe((response) => {
      this.employee = response;
      this.description = this.sanitizer.bypassSecurityTrustHtml(
        this.employee.Details
      );
      this.position = new FormControl(this.employee.Position, [Validators.required]);

    });
  }

  UpdateEmployee(){
    this.employee.Position = this.position.value;
    this.updateStatus = this.getDataService.updateEmployee(this.employee);
    this.countdown = 5000;
    timer(5000).subscribe(e=>this.countdown = 0);
  }
}
