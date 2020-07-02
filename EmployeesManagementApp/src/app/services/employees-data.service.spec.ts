/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EmployeesDataService } from './employees-data.service';

describe('Service: EmployeesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesDataService]
    });
  });

  it('should ...', inject([EmployeesDataService], (service: EmployeesDataService) => {
    expect(service).toBeTruthy();
  }));
});
