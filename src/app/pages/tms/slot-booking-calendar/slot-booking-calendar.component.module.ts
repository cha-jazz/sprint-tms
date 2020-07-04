import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbTabsetModule,
    NbUserModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbDatepickerModule,
    NbInputModule,
    NbDialogModule,
    NbPopoverModule,
    NbSpinnerModule,
    NbToggleModule,

} from '@nebular/theme';
// import { HttpClientModule } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
// import { TranslateModule } from '@ngx-translate/core';
import {
    CalendarDateFormatter,
    CalendarModule,
    CalendarMomentDateFormatter,
    DateAdapter,
    MOMENT,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

import { ThemeModule } from '../../../@theme/theme.module';
import { SlotBookingCalendarComponent } from './slot-booking-calendar.component';
import { CalendarSlotModule } from '../../shared/calendar/calendar.component.module';

// import { MatSortModule } from '@angular/material/sort';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

export function momentAdapterFactory() {
    return adapterFactory(moment);
}

@NgModule({
    imports: [
        ThemeModule,
        FormsModule,
        CommonModule,
        // NbActionsModule,
        // NbButtonModule,
        NbCardModule,
        // NbTabsetModule,
        // NbUserModule,
        // NbRadioModule,
        // NbSelectModule,
        // NbListModule,
        // NbIconModule,
        // HttpClientModule,
        // NbDatepickerModule,
        // NbInputModule,
        // NbDialogModule.forChild(),
        // NbPopoverModule,
        // NbSpinnerModule,
        // NbToggleModule,
        // MatTableModule,
        // MatSortModule,
        // MatPaginatorModule,
        // MatAutocompleteModule,
        MatInputModule,
        // MatIconModule,
        // MatButtonModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatRippleModule,
        // MatSelectModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        CalendarSlotModule,
        // TranslateModule,
        // CalendarModule.forRoot(
        //     {
        //         provide: DateAdapter,
        //         useFactory: momentAdapterFactory,
        //     },
        //     {
        //         dateFormatter: {
        //             provide: CalendarDateFormatter,
        //             useClass: CalendarMomentDateFormatter,
        //         },
        //     },
        // ),
    ],
    declarations: [
        SlotBookingCalendarComponent,
    ],
    exports: [
        SlotBookingCalendarComponent,
    ],
})
export class SlotBookingCalendarModule { }
