import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';

import { SlotBookingDeliveryTimeComponent } from './slot-booking-delivery-time.component';
import { SlotBookingAddModule } from '../slot-booking-add/slot-booking-add.component.module';
import { SlotBookingCalendarModule } from '../slot-booking-calendar/slot-booking-calendar.component.module';
import { SlotBookingBookSlotModule } from '../slot-booking-book-slot/slot-booking-book-slot.component.module';

import { ThemeModule } from '../../../@theme/theme.module';


@NgModule({
    imports: [
        ThemeModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        TranslateModule,
        SlotBookingAddModule,
        SlotBookingCalendarModule,
        SlotBookingBookSlotModule,
        // AgmCoreModule.forRoot({
        //     apiKey: '',
        // }),

    ],
    providers: [CookieService],
    declarations: [
        SlotBookingDeliveryTimeComponent,
    ],
})
export class SlotBookingDeliveryTimeModule { }
