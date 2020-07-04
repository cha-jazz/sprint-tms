import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../services/alert/alert.service';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { map } from 'rxjs/operators';
import { CalendarSlotService } from '../../../../services/tms/calendar.service';

moment.updateLocale('en', {
    week: {
        dow: DAYS_OF_WEEK.MONDAY,
        doy: 0,
    },
});

@Component({
    selector: 'ngx-calendar-slot',
    templateUrl: './calendar-slot.component.html',
    // styleUrls: ['../../../../shared/main.scss', './smart-table.component.scss'],
})

export class CalendarSlotComponent {
    constructor(
        private slotService: SlotBookingService,
        private alertService: AlertService,
        private router: Router,
        private actroute: ActivatedRoute,
        private calendarService: CalendarSlotService,
    ) {
        this.calendarService.currentMessage.subscribe(message => {
            this.transfer = message;
            // console.log('CalendarSlotComponent', this.transfer)
            if (this.transfer) {
                this.getCalendar('Today');
            } else {
                this.events = [];
            }
        });

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

    mySubscription: any;

    view: CalendarView = CalendarView.Month;

    viewDate: Date = new Date();

    events: CalendarEvent[] = [];
    activeDayIsOpen: boolean = false;

    async getCalendar(set: any) {
        this.events = [];
        let req: any = {
            serviceCode: this.transfer.service_type.value.serviceCode,
            sendPlaceCode: this.transfer.delivery_store.value.placeCode,
            zoneCode: this.transfer.zone_select.value.zoneCode,
            searchStartDate: moment().format('YYYY-MM-DD'),
            searchEndDate: moment().format('YYYY-MM-') + moment(moment().format('MM'), 'MM').daysInMonth(),
            deliveryOptionCode: this.transfer.delivery_type.value.deliveryOptionCode,
        };
        if (set !== 'Today') {
            req.searchStartDate = moment(set).format('YYYY-MM-') + '01';
            req.searchEndDate = moment(set).format('YYYY-MM-') + moment(moment(set).format('MM'), 'MM').daysInMonth();
        }
        let response: any = await this.slotService.getCalendarSearch(req);
        // let response:any = 
        //     {
        //         allot: [
        //             {
        //             allotDate: "2020-07-01T00:00:00.0000000",
        //             allotSlot: [
        //                 {
        //                     slotBackgroundColor: null,
        //                     slotCode: "001",
        //                     slotNameEN: "เช้า",
        //                     slotNameLocal: "เช้า",
        //                     slotStartTime: "09:00",
        //                 },
        //                 {
        //                     slotBackgroundColor: null,
        //                     slotCode: "002",
        //                     slotNameEN: "สาย",
        //                     slotNameLocal: "สาย",
        //                     slotStartTime: "11:00",
        //                 }
        //             ]
        //         }

        //         ]
        //     }
        // ]
        if (response) {
            console.log('response', response);
            let table = [];
            response.allot.forEach(element => {
                element.allotSlot.forEach(elementSlot => {
                    table.push({
                        start: new Date(element.allotDate),
                        title: elementSlot.slotNameEN + ' ' + elementSlot.slotStartTime,
                        color: {
                            primary: elementSlot.slotBackgroundColor,
                            secondary: elementSlot.slotFontColor,
                        },
                        meta: {
                            text: elementSlot.slotStartTime,
                            allotSlot: elementSlot,
                        },
                    });
                });
            });
            if (this.transfer) { // check data from service that have data
                this.events = table;
            } else {
            }
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
            let req = {
                sendPlaceCode: this.transfer.delivery_store.value.placeCode,
                stockplaceCode: '',
                sellPlaceCode: localStorage.getItem('placeCodeTMS'),
                serviceCode: this.transfer.service_type.value.serviceCode,
                zoneCode: this.transfer.zone_select.value.zoneCode,
                productCode: this.transfer.product.value.productCode,
                deliveryOptionCode: this.transfer.delivery_type.value.deliveryOptionCode,
                bookingDate: moment(event.start).format('YYYY-MM-DD'),
                slotSequence: event.meta.allotSlot.slotSequence,
                userCode: localStorage.getItem('userNameTMS'),
            };
            if (this.transfer.check_other_store === true) {
                req.stockplaceCode = this.transfer.other_store.value.placeCode;
            }
            let response_save = await this.slotService.postCalendarSave(req);
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
                groups[event.meta.text] = {
                    backgroundColor: event.color.primary,
                    fontColor: event.color.secondary,
                };
            });
            cell['eventTitle'] = Object.entries(groups);
        });
    }

}
