import { ConfirmDialogService } from './confirm-dialog.service';
import { ConfirmDialogModel } from './../../models/confirm-dialog-model';
import { BehaviorSubject } from 'rxjs';
import { ConfirmDialogData } from './../../models/confirm-dialog-data';
import { Component, OnInit } from '@angular/core';
import { ConfirmDialogType } from 'src/app/models/confirm-dialog-type.enum';

@Component({
  selector: 'ema-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  showDialog: boolean;
  data: ConfirmDialogData;

  constructor(private confirmDialogService: ConfirmDialogService) {
    this.showDialog = false;
    this.data = null;
   }

  ngOnInit(): void {
    this.confirmDialogService._modalSubject.subscribe(observer => {
      if(observer != null){
        this.data = observer;
        this.showDialog = true;
      }
    });
  }

  Close(): void {
    this.confirmDialogService.CloseModal(ConfirmDialogType.CLOSE);
    this.showDialog = false;
    this.data = null;
  }

  Dismiss(): void {
    this.confirmDialogService.CloseModal(ConfirmDialogType.DISMISS);
    this.showDialog = false;
    this.data = null;
  }

}
