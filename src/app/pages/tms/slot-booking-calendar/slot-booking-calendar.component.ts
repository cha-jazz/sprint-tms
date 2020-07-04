import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../services/alert/alert.service';
import { SlotBookingService } from '../../../services/tms/slotbooking.service';
import { map } from 'rxjs/operators';
import { CalendarSlotService } from '../../../services/tms/calendar.service';
moment.updateLocale('en', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
    doy: 0,
  },
});

@Component({
  selector: 'ngx-slot-booking-calendar',
  templateUrl: './slot-booking-calendar.component.html',
  styleUrls: ['./slot-booking-calendar.component.scss']
})
export class SlotBookingCalendarComponent {

  constructor(
    private slotService: SlotBookingService,
    private alertService: AlertService,
    private router: Router,
    private actroute: ActivatedRoute,
    private calendarService: CalendarSlotService,
  ) { }
  header = {
    product: '',
    delivery_type: '',
    service_type: '',
    delivery_address: '',
    delivery_store: '',
    other_store: '-',
    zone_select: '',
  };

  // ngOnInit() {

  //   // console.log('this.transfer_add', this.transfer_add)
  //   // this.header.product = this.transfer_add.product.name;
  //   // this.header.delivery_address = this.transfer.delivery_address.nameLocal;
  //   // this.header.delivery_store = this.transfer.delivery_store.placeNameLocal;
  //   // if (this.transfer.check_other_store === true) {
  //   //   this.header.other_store = this.transfer.other_store.placeNameLocal;
  //   // }
  //   // this.header.zone_select = this.transfer.zone_select.zoneNameLocal;
  //   // this.header.service_type = this.transfer.service_type.serviceName;
  //   // this.header.delivery_type = this.transfer.delivery_type.nameLocal;
  //   // this.getCalendar('Today');

  // }
  showData(event: any) {
    this.header.product = event.product.value.name;
    this.header.delivery_address = event.delivery_address.value.nameLocal;
    this.header.delivery_store = event.delivery_store.value.placeNameLocal;
    this.header.other_store = event.other_store.value.placeNameLocal;
    this.header.zone_select = event.zone_select.value.zoneNameLocal;
    this.header.service_type = event.service_type.value.serviceName;
    this.header.delivery_type = event.delivery_type.value.nameEn;
    this.calendarService.changeMessage(event);
  }


}
