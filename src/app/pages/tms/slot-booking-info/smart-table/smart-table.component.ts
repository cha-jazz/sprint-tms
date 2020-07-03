import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { AlertService } from '../../../../services/alert/alert.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['../../../../shared/main.scss'],
})
export class SmartTableComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    private alertService: AlertService,
    private slotService: SlotBookingService,
    private router: Router,
  ) { }
  searchs = {
    bu_code: '',
    bu_name: '',
  };
  table = {
    displayed_columns: ['bookingNumber', 'zoneName', 'deliveryDate', 'deliveryDateLabel',
      'skuCode', 'productName', 'serviceName', 'shipmentUser', 'timecount', 'action'],
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

  ngOnInit(): void {
    this.search();

  }
  dateFormat(event: any) {
    return moment(event).format('MM-DD-YYYY');
  }
  async search() {
    let req: any = {
      buCode: 'PWB',
      placeCode: '00002',
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
          table.push(element);
        }
      });
      this.table.data_source.data = table;
      this.table.data_source.sort = this.sort;
      console.log('table', this.table.data_source.data)
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.table.data_source.filter = filterValue.trim().toLowerCase();

    if (this.table.data_source.paginator) {
      this.table.data_source.paginator.firstPage();
    }
  }

  async action_delete(event: any) {
    let response: any = await this.alertService.AlertSlotInfoCancel(event.shipmentNumber);
    if (response.value === true) {
      let req: any = {
        buCode: 'PWB',
        bookingNumber: event.shipmentNumber,
        userCode: 'test_user',
      };
      let response_confirm: any = await this.slotService.getBookingCancel(req);
      if (response_confirm) {
        console.log('response_confirm', response_confirm);
        let data = this.table.data_source.data;
        data.splice(this.table.data_source.data.indexOf(event), 1);
        this.table.data_source.data = data;
        this.alertService.AlertSlotInfoSuccess('');
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
