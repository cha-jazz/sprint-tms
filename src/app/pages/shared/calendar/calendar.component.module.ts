import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    CalendarDateFormatter,
    CalendarModule,
    CalendarMomentDateFormatter,
    DateAdapter,
    MOMENT,
} from 'angular-calendar';
import { CalendarSlotComponent } from './calendar-slot/calendar-slot.component';
import { CalendarHeaderComponent} from './calendar-slot/calendar-header/calendar-header.component';

import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
export function momentAdapterFactory() {
    return adapterFactory(moment);
}
@NgModule({
    imports: [
        CommonModule,
        CalendarModule.forRoot(
            {
                provide: DateAdapter,
                useFactory: momentAdapterFactory,
            },
            {
                dateFormatter: {
                    provide: CalendarDateFormatter,
                    useClass: CalendarMomentDateFormatter,
                },
            },
        ),
    ],
    providers: [
        {
            provide: MOMENT,
            useValue: moment,
        },
    ],
    declarations: [
        CalendarSlotComponent,
        CalendarHeaderComponent,
    ],
    exports: [
        CalendarSlotComponent,
        CalendarHeaderComponent,
    ],
})
export class CalendarSlotModule { }
