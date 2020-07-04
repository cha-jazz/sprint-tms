import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { ConfigService } from '../../services/config-path.service';

@Component({
  selector: 'ngx-logins',
  templateUrl: './login-page.component.html',
  styleUrls: [],
})
export class LoginComponent implements OnInit {
  @ViewChild('pRefUser', { static: false }) pRefUser: ElementRef;
  @ViewChild('pRefPassword', { static: false }) pRefPassword: ElementRef;
  constructor(
    private client: HttpClient,
    private router: Router,
  ) { }
  loading = false;
  validate = {
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  };
  validateBind = {
    user: '',
    password: '',
  };
  checked = false;
  login_click = false;

  ngOnInit() {
    // if (localStorage.getItem('userName') !== '') {
    //   this.validateBind.user = localStorage.getItem('userName');
    //   this.validateBind.password = localStorage.getItem('password');
    //   this.checked = Boolean(localStorage.getItem('checkBoxValidation'));
    // }
  }
  onKeyEnter(event: any) {
    if (event.code === 'Enter') {
      this.login();
    }
  }
  login() {
    this.login_click = true;
    let validateCount = 0;
    if (this.validate.password.status === 'INVALID') {
      this.validate.password.markAsTouched();
      // this.pRefPassword.nativeElement.focus();
      validateCount++;
    }
    if (this.validate.user.status === 'INVALID') {
      this.validate.user.markAsTouched();
      // this.pRefUser.nativeElement.focus();
      validateCount++;
    }
    console.log('validate',this.validate)
    if (validateCount === 0) {
      this.loading = true;
      localStorage.setItem('userNameTMS', this.validate.user.value);
      localStorage.setItem('passwordTMS', this.validate.password.value);
      localStorage.setItem('placeCodeTMS', '00002');
      localStorage.setItem('buCodeTMS', 'PWB');
      if (this.validate.user.value === 'admin') {
        localStorage.setItem('roleTMS', 'admin');
      } else {
        localStorage.setItem('roleTMS', 'normal');
      }
      this.router.navigateByUrl('pages/slot-booking-info');
    }
    // if (validateCount === 0) {
    //   console.log(this.validate);
    //   console.log(this.checked);

    //   const sendData = new HttpParams() // content type = x-www-form-urlencoded
    //     .set('USERID', this.validate.user.value)
    //     .set('PASS', this.validate.password.value)
    //     .set('APPCODE', 'NEHUBTRIP');


    //   console.log('sendData', sendData);
    //   // console.log(path.UserManagement.UMServiceUrl);
    //   this.client.post(path.UserManagement.UMServiceUrl + 'Login/CheckUser', sendData)
    //     .subscribe(data => {
    //       this.convertToArrayLogin(data);

    //     },
    //       error => {
    //         this.loading = false;
    //         console.log(error);
    //         this.alertError(error);
    //       });
    // }

  }

  // convertToArrayLogin(data) {
  //   console.log('data', data);
  //   if (data.Status === 1) {
  //     if (this.checked === true) {
  //       localStorage.setItem('userName', this.validate.user.value);
  //       localStorage.setItem('password', this.validate.password.value);
  //       localStorage.setItem('checkBoxValidation', this.checked.toString());
  //     } else {
  //       localStorage.setItem('userName', '');
  //       localStorage.setItem('password', '');
  //       localStorage.setItem('checkBoxValidation', 'false');
  //     }

  //     if (data.Object.User.StoreCode == null) {
  //       sessionStorage.setItem('USERSTORECODE', '');
  //     } else {
  //       sessionStorage.setItem('USERSTORECODE', data.Object.User.StoreCode);
  //     }

  //     sessionStorage.setItem('USERID', data.Object.Id);
  //     sessionStorage.setItem('USERNAME', data.Object.Login);
  //     sessionStorage.setItem('USERROLEID', data.Object.RoleCode);
  //     sessionStorage.setItem('BU', data.Object.User.Bu);
  //     sessionStorage.setItem('EMPLOYEEID', data.Object.User.EmployeeId);
  //     sessionStorage.setItem('NAME', data.Object.User.Name);
  //     sessionStorage.setItem('LASTNAME', data.Object.User.LastName);
  //     sessionStorage.setItem('LAST_LOGIN', moment().format('MM-DD-YYYY HH:mm'));

  //     if (data.Object.RoleCode === 'NEADMIN') {
  //       this.router.navigate(['pages/trip-assignment-screen/list']);
  //     } else {
  //       Swal.fire({
  //         icon: 'warning',
  //         title: 'Role ของ username นี้ไม่ถูกต้อง กรุณาติดต่อทีม BDC Ne Hub',
  //         allowOutsideClick: false,
  //       });
  //     }
  //   } else {
  //     this.loading = false;
  //     this.alertErrorDataResponse(data);
  //   }
  // }

}
