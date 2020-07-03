import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class AlertService {

    constructor() { }

    AlertNotFound(data) {
        console.log('AlertNotFound', data);
        Swal.fire({
            title: 'Data Not Found',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    AlertSuccess(data) {
        console.log('AlertSuccess', data);
        if (data.results) {
            Swal.fire({
                icon: 'success',
                title: data.results[0].statusReason,
                html: '<b>Result :</b>' + data.results[0].result,
                allowOutsideClick: false,
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: data.statusReason,
                html: '<b>Result :</b>' + data.result,
                allowOutsideClick: false,
            });
        }
    }

    AlertError(data) {
        console.log('AlertError', data);
        if (data.error.results) {
            Swal.fire({
                icon: 'error',
                title: data.error.results[0].statusReason,
                html: '<b>Result :</b>' + data.error.results[0].result,
                allowOutsideClick: false,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: data.error.statusReason,
                html: '<b>Result :</b>' + data.error.result,
                allowOutsideClick: false,
            });
        }
    }

    async AlertCheckDelete(data) {
        console.log('AlertCheckDelete', data);
        let check;
        await Swal.fire({
            title: 'Are you sure?',
            text: 'This will delete ' + data + ' !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            cancelButtonColor: '#ff3d71',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotBookingCheck(data) {
        console.log('AlertSlotBookingCheck', data);
        // let message = data.title.substring(0, data.title.length).split('//');
        // console.log('message', message)
        let check;
        await Swal.fire({
            title: 'ยืนยันการนัดหมาย',
            // html: '<b>' + message[0] + '</b><br>' + message[1],
            html: data.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            cancelButtonColor: '#ff3d71',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotBookingSuccess(data) {
        console.log('AlertSlotBookingSuccess', data);
        let check;
        await Swal.fire({
            title: 'ยืนยันการนัดหมาย',
            icon: 'success',
            html: 'จองนัดหมายเรียบร้อย',
            allowOutsideClick: false,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotInfoCancel(data) {
        console.log('AlertSlotInfoCancel', data);
        let check;
        await Swal.fire({
            title: 'ยืนยันการยกเลิก',
            icon: 'warning',
            html: 'ยืนยันการยกเลิกเลขที่การจอง ' + data,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
            cancelButtonColor: '#ff3d71',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    AlertSlotInfoSuccess(data) {
        console.log('AlertSlotInfoSuccess', data);
        Swal.fire({
            title: 'ยืนยันการยกเลิก',
            icon: 'success',
            html: 'ยืนยันการยกเลิกเรียบร้อย',
            allowOutsideClick: false,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class AlertTMSService {

    constructor() { }

    AlertNotFound(data) {
        console.log('AlertNotFound', data);
        Swal.fire({
            title: 'Data Not Found',
            icon: 'info',
            showConfirmButton: false,
            timer: 1500,
        });
    }

    AlertSuccess(data) {
        console.log('AlertSuccess', data);
        if (data.results) {
            Swal.fire({
                icon: 'success',
                title: data.results[0].statusReason,
                html: '<b>Result :</b>' + data.results[0].result,
                allowOutsideClick: false,
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: data.statusReason,
                html: '<b>Result :</b>' + data.result,
                allowOutsideClick: false,
            });
        }
    }

    AlertError(data) {
        console.log('AlertError', data);

            Swal.fire({
                icon: 'error',
                title: data.name,
                html: '<b>Result : </b>' + data.error.statusText,
                allowOutsideClick: false,
            });

    }

    async AlertCheckDelete(data) {
        console.log('AlertCheckDelete', data);
        let check;
        await Swal.fire({
            title: 'Are you sure?',
            text: 'This will delete ' + data + ' !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            cancelButtonColor: '#ff3d71',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotBookingCheck(data) {
        console.log('AlertSlotBookingCheck', data);
        // let message = data.title.substring(0, data.title.length).split('//');
        // console.log('message', message)
        let check;
        await Swal.fire({
            title: 'ยืนยันการนัดหมาย',
            // html: '<b>' + message[0] + '</b><br>' + message[1],
            html: data.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            cancelButtonColor: '#ff3d71',
            confirmButtonText: 'ยืนยัน',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotBookingSuccess(data) {
        console.log('AlertSlotBookingSuccess', data);
        let check;
        await Swal.fire({
            title: 'ยืนยันการนัดหมาย',
            icon: 'success',
            html: 'จองนัดหมายเรียบร้อย',
            allowOutsideClick: false,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    async AlertSlotInfoCancel(data) {
        console.log('AlertSlotInfoCancel', data);
        let check;
        await Swal.fire({
            title: 'ยืนยันการยกเลิก',
            icon: 'warning',
            html: 'ยืนยันการยกเลิกเลขที่การจอง ' + data,
            allowOutsideClick: false,
            showCancelButton: true,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
            cancelButtonColor: '#ff3d71',
            cancelButtonText: 'ยกเลิก',
        }).then((result) => {
            check = result;
        });
        return check;
    }

    AlertSlotInfoSuccess(data) {
        console.log('AlertSlotInfoSuccess', data);
        Swal.fire({
            title: 'ยืนยันการยกเลิก',
            icon: 'success',
            html: 'ยืนยันการยกเลิกเรียบร้อย',
            allowOutsideClick: false,
            confirmButtonColor: '#00d68f',
            confirmButtonText: 'ยืนยัน',
        });
    }
}
