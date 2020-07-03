import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { SmartTableComponent } from '../smart-table/smart-table.component'

@Component({
    selector: 'mwl-demo-utils-calendar-header',
    templateUrl: './calendar-header.component.html',
    styleUrls: ['../../../../shared/main.scss']
})
export class CalendarHeaderComponent {
    constructor(private smartTable: SmartTableComponent) {

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
