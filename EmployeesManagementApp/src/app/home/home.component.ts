import { Observable } from 'rxjs';
import { GetDataService } from './../services/get-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/models/employee';
//import * as data from '../../assets/employees.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
employees : Observable<Employee[]>;

  constructor(private getDataService : GetDataService,
    ) { }

  ngOnInit(): void {
  //  console.log(data);
  this.getData();
  }

  getData(){
  this.employees= this.getDataService.subscribeToEmployees();
  console.log(this.employees);
  console.log(this.employees.subscribe()); //.value.forEach(el => console.log(el));
  }


}
