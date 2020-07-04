import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
//import * as data from '../../assets/employees.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

  searchKey: string = "";
  constructor() {}

  ngOnInit(): void {
  }


}
