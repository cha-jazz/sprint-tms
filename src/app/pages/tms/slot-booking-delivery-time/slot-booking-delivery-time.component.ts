import { Component, OnInit } from '@angular/core';
import { CalendarSlotService } from '../../../services/tms/calendar.service';
@Component({
  selector: 'ngx-slot-booking-delivery-time',
  templateUrl: './slot-booking-delivery-time.component.html',
  styleUrls: ['./slot-booking-delivery-time.component.scss']
})
export class SlotBookingDeliveryTimeComponent implements OnInit {

  constructor(
    private calendarService: CalendarSlotService,
  ) { }
  ngOnInit() {
    this.calendarService.changeMessage('');
  }

}
