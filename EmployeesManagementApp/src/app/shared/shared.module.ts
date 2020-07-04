import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';



@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    ConfirmDialogComponent,
  ],
  providers: [ConfirmDialogService]
})
export class SharedModule { }
