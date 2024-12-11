import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { CoreService } from '../../services/core.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  constructor(private _snackBar: MatSnackBar, public coreService: CoreService,
    @Inject(MAT_SNACK_BAR_DATA) public data: any, private snackBarRef: MatSnackBarRef<AlertComponent>) { }

  closeAlert() {
    this._snackBar.dismiss();  // Dismiss the snack bar when clicked
  }
}
