import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FilterEmployeePipe } from './pipes/filter-employee.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeesListComponent,
    OrderByPipe,
    FilterEmployeePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
