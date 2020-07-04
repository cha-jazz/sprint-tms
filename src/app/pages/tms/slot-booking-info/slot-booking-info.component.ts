import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as moment from 'moment';
import { SlotBookingService } from '../../../services/tms/slotbooking.service';
import { AlertService } from '../../../services/alert/alert.service';

@Component({
  selector: 'ngx-slot-booking-info',
  templateUrl: './slot-booking-info.component.html',
  styleUrls: ['../../../scss/main.scss'],
})
export class SlotBookingInfoComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private alertService: AlertService,
    private slotService: SlotBookingService,
  ) { }
  text = {
    total_shipment_number: 0,
  };
  searchs = {
    bu_code: '',
    bu_name: '',
  };
  table = {
    displayed_columns: ['shipmentNumber', 'zoneName', 'deliveryDate', 'deliveryDateLabel',
      'skucode', 'productName', 'serviceName', 'placeCodeSend', 'shipmentUser', 'timecount', 'action'],
    data_source: new MatTableDataSource(),
    length: 0,
    page_no: 1,
    page_size_options: [10, 20, 50, 100],
    page_size: 10,
    enabled: false,
    hide_page_size: false,
  };
  counter: { min: number, sec: number }
  countsAray = [];
  Toastdata;
  ngOnInit() {
    this.search();
  }

  dateFormat(event: any) {
    return moment(event).format('MM-DD-YYYY');
  }

  async search() {
    let req: any = {
      buCode: localStorage.getItem('buCodeTMS'),
      placeCode: localStorage.getItem('placeCodeTMS'),
    }
    let response: any = await this.slotService.getBookingSearch(req);
    if (response) {
      console.log('response', response);
      let table = [];
      response.slotBookingInfo.forEach((element) => {
        // let time_minute = moment().diff(moment(element.bookingDate), 'seconds');
        let time_minute = moment().diff(moment(element.shipmentDate), 'seconds');
        // console.log('time_minute', time_minute)
        // console.log('sec', time_minute);
        if (time_minute < 1800) {
          time_minute = 1800 - time_minute;
          // console.log('time change', moment.unix(time_minute).utc().format('mm : ss'))
          element.sec = moment.unix(time_minute).utc().format('ss');
          element.min = moment.unix(time_minute).utc().format('mm');
          this.startTimer(element);
          delete element.productCode;
          table.push(element);
        }
      });
      this.table.data_source.data = table;
      this.table.data_source.sort = this.sort;
      this.text.total_shipment_number = this.table.data_source.data.length;
      console.log('table', this.table.data_source.data)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('filter', filterValue)
    this.table.data_source.filter = filterValue.trim().toLowerCase();
    console.log('this.table.data_source.filter', this.table.data_source.filter)
  }

  async action_delete(event: any) {
    ($('#popupDelete') as any).modal('hide');
    ($('#toasts-msg-delete') as any).toast('show');
    let req: any = {
      buCode: localStorage.getItem('buCodeTMS'),
      bookingNumber: event.shipmentNumber,
      userCode: localStorage.getItem('userNameTMS'),
    };
    let response_confirm: any = await this.slotService.getBookingCancel(req);
    if (response_confirm) {
      console.log('response_confirm', response_confirm);
      if (!response_confirm.error) {
        let data = this.table.data_source.data;
        data.splice(this.table.data_source.data.indexOf(event), 1);
        this.table.data_source.data = data;
        this.text.total_shipment_number -= 1;
        // this.alertService.AlertSlotInfoSuccess('');
        this.Toastdata = 'ลบเวลานัดส่งสินค้าสำเร็จ';
      } else {
        this.Toastdata = response_confirm.error.statusText;
      }
    }
  }

  startTimer(element) {
    let intervalId = setInterval(() => {

      if (element.sec - 1 === -1) {
        element.min -= 1;
        if (element.min.toString().length === 1) {
          element.min = '0' + element.min;
        }
        element.sec = 59;
      } else {
        element.sec -= 1;
        if (element.sec.toString().length === 1) {
          element.sec = '0' + element.sec;
        }
      }
      element.timecount = element.min + ' : ' + element.sec;
      if (element.min === '00' && element.sec === '00') {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
