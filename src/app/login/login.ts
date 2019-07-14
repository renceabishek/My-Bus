import { Component } from '@angular/core';
import { UtilService } from '../services/util.service';
import { MatDialogRef } from '@angular/material';

export interface DialogData {
}

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class Login {
    mobileno: number;
    otpcode: string;
    type: string = 'login';

    constructor(
        private util: UtilService,
        public dialogRef: MatDialogRef<Login>
    ) { }
    generateOTP() {
        if (!this.mobileno || this.mobileno.toString().length != 10)
            this.util.openSnackBar('Enter valid mobile number', 'Dismiss', 3000);
        else
            this.type = 'otp';
    }
    validateOTP() {
        this.util.openSnackBar('Logged In Successfully', 'Dismiss', 3000);
        this.dialogRef.close();
    }
}

