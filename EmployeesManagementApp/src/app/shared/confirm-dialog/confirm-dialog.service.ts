import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfirmDialogData } from 'src/app/models/confirm-dialog-data';
import { ConfirmDialogType } from 'src/app/models/confirm-dialog-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  private modalSubjectSource: BehaviorSubject<ConfirmDialogData> = new BehaviorSubject<ConfirmDialogData>(null);
  private modalCloseSubjectSource: BehaviorSubject<ConfirmDialogType> =  new BehaviorSubject<ConfirmDialogType>(null);

  public _modalSubject: Observable<ConfirmDialogData> = this.modalSubjectSource.asObservable();
  public _modalCloseSubject: Observable<ConfirmDialogType> = this.modalCloseSubjectSource.asObservable();

  constructor() {
  }

  OpenModal(data: ConfirmDialogData) {
    this.modalSubjectSource.next(data);
    return this.modalCloseSubjectSource.asObservable();
  }

  CloseModal(type: ConfirmDialogType) {
    this.modalCloseSubjectSource.next(type);
  }
}
