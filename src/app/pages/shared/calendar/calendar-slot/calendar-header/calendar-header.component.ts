import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarSlotComponent } from '../calendar-slot.component';

@Component({
    selector: 'ngx-calendar-header',
    templateUrl: './calendar-header.component.html',
})
export class CalendarHeaderComponent {
    constructor(private smartTable: CalendarSlotComponent) {

    }
    @Input() view: CalendarView;

    @Input() viewDate: Date;

    @Input() locale: string = 'en';

    @Output() viewChange = new EventEmitter<CalendarView>();

    @Output() viewDateChange = new EventEmitter<Date>();

    CalendarView = CalendarView;

    nowDate(event: any) {
        this.smartTable.getCalendar('Today');
    }
    changeDate(event: any) {
        this.smartTable.getCalendar(event);
    }
}
