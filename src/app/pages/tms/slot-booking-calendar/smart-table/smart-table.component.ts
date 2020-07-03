import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../services/alert/alert.service';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { map } from 'rxjs/operators';

moment.updateLocale('en', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
    doy: 0,
  },
});

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['../../../../shared/main.scss', './smart-table.component.scss'],
})

export class SmartTableComponent implements OnInit {

  constructor(
    private slotService: SlotBookingService,
    private alertService: AlertService,
    private router: Router,
    private actroute: ActivatedRoute,
  ) {

  }

  transfer;
  header = {
    product: '',
    delivery_type: '',
    service_type: '',
    delivery_address: '',
    delivery_store: '',
    other_store: '-',
    zone_select: '',
  };
  loading;

  mySubscription: any;

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    // {
    //   start: new Date('06-02-2020'),
    //   title: 'เวลานัดหมาย 9.00 - 11.00 น.ไม่มีค่าใช้จ่ายในการจัดส่ง',
    //   color: {
    //     primary: '#2196f3',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '9',
    //   },
    // },
    // {
    //   start: new Date('06-02-2020'),
    //   title: 'เวลานัดหมาย 11.00 - 13.00 น. ไม่มีค่าใช้จ่ายในการจัดส่ง',
    //   color: {
    //     primary: '#03a9f4',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '11',
    //   },
    // },
    // {
    //   start: new Date('06-02-2020'),
    //   title: 'เวลานัดหมาย 13.00 - 15.00 น. ไม่มีค่าใช้จ่ายในการจัดส่ง',
    //   color: {
    //     primary: '#288b0a',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '13',
    //   },
    // },
    // {
    //   start: new Date('06-02-2020'),
    //   title: 'เวลานัดหมาย 15.00 - 17.00 น. ไม่มีค่าใช้จ่ายในการจัดส่ง',
    //   color: {
    //     primary: '#eeb60e',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '15',
    //   },
    // },
    // {
    //   start: new Date('06-02-2020'),
    //   title: 'เวลานัดหมาย 17.00 - 19.00 น. *มีค่าใช้จ่ายในการจัดส่ง 20 บาท',
    //   color: {
    //     primary: '#f9b7b2',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '17',
    //   },
    // },
    // {
    //   start: new Date('06-03-2020'),
    //   title: 'เวลานัดหมาย 9.00 - 11.00 น. ไม่มีค่าใช้จ่ายในการจัดส่ง',
    //   color: {
    //     primary: '#3CB9E3',
    //     secondary: '#ededed',
    //   },
    //   meta: {
    //     text: '9',
    //   },
    // },
  ];
  activeDayIsOpen: boolean = false;

  ngOnInit() {
    this.actroute.paramMap
      .pipe(map(() => window.history.state));
    this.transfer = window.history.state;
    console.log('this.transfer', this.transfer);
    if (Object.keys(this.transfer).length < 2) {
      this.router.navigateByUrl('pages/slot-booking-add');
    } else {
      this.header.product = this.transfer.product.name;
      this.header.delivery_address = this.transfer.delivery_address.nameLocal;
      this.header.delivery_store = this.transfer.delivery_store.placeNameLocal;
      if (this.transfer.check_other_store === true) {
        this.header.other_store = this.transfer.other_store.placeNameLocal;
      }
      this.header.zone_select = this.transfer.zone_select.zoneNameLocal;
      this.header.service_type = this.transfer.service_type.serviceName;
      this.header.delivery_type = this.transfer.delivery_type.nameLocal;
      this.getCalendar('Today');
    }
  }

  async getCalendar(set: any) {
    // console.log('set', set)
    this.loading = true;
    this.events = [];
    let req: any = {
      serviceCode: '001',
      sendPlaceCode: '00016',
      zoneCode: '00002-006',
      searchStartDate: moment().format('YYYY-MM-DD'),
      searchEndDate: moment().format('YYYY-MM-') + moment(moment().format('MM'), 'MM').daysInMonth(),
      deliveryOptionCode: 'NORMAL',
    };
    if (set !== 'Today') {
      req.searchStartDate = moment(set).format('YYYY-MM-') + '01';
      req.searchEndDate = moment(set).format('YYYY-MM-') + moment(moment(set).format('MM'), 'MM').daysInMonth();
    }
    let response: any = await this.slotService.getCalendarSearch(req);
    if (response) {
      console.log('response', response);
      let table = [];
      response.allot.forEach(element => {
        element.allotSlot.forEach(elementSlot => {
          table.push({
            start: new Date(element.allotDate),
            title: elementSlot.slotNameEN + ' ' + elementSlot.slotStartTime,
            color: {
              primary: '#2196f3',
              secondary: '',
            },
            meta: {
              text: elementSlot.slotStartTime,
              allotSlot: elementSlot,
            },
          });
        });
      });
      this.events = table;
      this.loading = false;
    }

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {

    if (moment(date).format('MM') === moment(this.viewDate).format('MM')) {
      if (
        ((moment(date).format('DD') === moment(this.viewDate).format('DD')) && this.activeDayIsOpen === true) ||
        events.length === 0) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  async handleEvent(action: string, event: CalendarEvent) {
    // console.log('action', action);
    // console.log('event', event);
    let response = await this.alertService.AlertSlotBookingCheck(event);
    if (response.value === true) {
      this.loading = true;
      let req = {
        sendPlaceCode: this.transfer.delivery_store.placeCode,
        stockplaceCode: '',
        sellPlaceCode: '00002',
        serviceCode: this.transfer.service_type.serviceCode,
        zoneCode: this.transfer.zone_select.zoneCode,
        productCode: this.transfer.product.productCode,
        deliveryOptionCode: this.transfer.delivery_type.deliveryOptionCode,
        bookingDate: moment(event.start).format('YYYY-MM-DD'),
        slotCode: event.meta.allotSlot.slotCode,
        userCode: 'test_user',
      }
      if (this.transfer.check_other_store === true) {
        req.stockplaceCode = this.transfer.other_store.placeCode;
      }
      let response_save = await this.slotService.postCalendarSave(req);
      this.loading = false;
      if (response_save) {
        console.log('response_save', response_save);
        let response_success = await this.alertService.AlertSlotBookingSuccess('');
        // console.log('response_success', response_success);
        if (response_success.value === true) {
          this.router.navigateByUrl('pages/slot-booking-info');
        }
      }
    }
  }

  beforeMonthViewRender({
    body,
  }: {
    body: CalendarMonthViewDay[];
  }): void {
    // month view has a different UX from the week and day view so we only really need to group by the type
    body.forEach((cell) => {
      const groups = {};
      cell.events.forEach((event: CalendarEvent, index) => {
        groups[event.meta.text] = event.color.primary;
      });
      cell['eventTitle'] = Object.entries(groups);
    });
  }

}
