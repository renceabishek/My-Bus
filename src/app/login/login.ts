import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
    password: string;
    email: string;
    type: string = 'login';
    hidePassword = true;
    loginform: FormGroup;
    regform: FormGroup;
    selectedIndex = 0;
    constructor(
        private util: UtilService,
        public dialogRef: MatDialogRef<Login>,
        private _fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loginform = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
        this.regform = this._fb.group({
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.minLength(10)]],
            password: ['', [Validators.required]]
        });
    }
    registerUser(value, valid) {
        if (valid) {
            let users = JSON.parse(localStorage.getItem('users'));
            users = users || [];
            users.push(value);
            localStorage.setItem('users', JSON.stringify(users));
            this.util.openSnackBar('Registered successfully', 'Dismiss', 3000);
            this.selectedIndex = 0;
        } else {
            this.util.openSnackBar('Enter valid data', 'Dismiss', 3000);
        }
    }
    doLogin(value, valid) {
        if (valid) {
            let users = JSON.parse(localStorage.getItem('users'));
            users = users.filter(row => row.email == value.email);
            if (users.length) {
                if (users[0].password == value.password) {
                    this.util.openSnackBar('Log in successfully', 'Dismiss', 3000);
                    this.dialogRef.close();
                } else
                    this.util.openSnackBar('Password doesnt match', 'Dismiss', 3000);
            } else
                this.util.openSnackBar('User not exist', 'Dismiss', 3000);
        } else {
            this.util.openSnackBar('Enter valid data', 'Dismiss', 3000);
        }
    }
    forgotPwd(){
        
    }
}

