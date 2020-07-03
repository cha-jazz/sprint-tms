import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { SlotBookingInfoModule } from './tms/slot-booking-info/slot-booking-info.component.module';
import { SlotBookingAddModule } from './tms/slot-booking-add/slot-booking-add.component.module';
import { SlotBookingCalendarModule } from './tms/slot-booking-calendar/slot-booking-calendar.component.module';
import { SlotBookingSummaryModule } from './tms/slot-booking-summary/slot-booking-summary.component.module';
import { SlotBookingCreateModule } from './tms/slot-booking-create/slot-booking-create.component.module';
import { SlotBookingDragDropModule } from './tms/slot-booking-drag-drop/slot-booking-drag-drop.component.module';
import { SlotBookingSearchModule } from './tms/slot-booking-search/slot-booking-search.component.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    SlotBookingInfoModule,
    SlotBookingAddModule,
    SlotBookingCalendarModule,
    SlotBookingSummaryModule,
    SlotBookingCreateModule,
    SlotBookingDragDropModule,
    SlotBookingSearchModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
