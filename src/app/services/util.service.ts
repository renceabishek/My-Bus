import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loader: boolean = false;
  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string, duration: number) {
    this._snackBar.open(message, action, { duration });
  }
  showLoader() {
    this.loader = true;
  }
  hideLoader() {
    this.loader = false;
  }
}
