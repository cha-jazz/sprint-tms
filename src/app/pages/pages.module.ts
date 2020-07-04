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
import { SlotBookingDeliveryTimeModule,
} from './tms/slot-booking-delivery-time/slot-booking-delivery-time.component.module';
import { SlotBookingBookSlotModule } from './tms/slot-booking-book-slot/slot-booking-book-slot.component.module';
import { SlotPosSearchCustomerModule } from './tms/slot-pos-search-customer/slot-pos-search-customer.component.module';
import { SlotPosAddCustomerModule } from './tms/slot-pos-add-customer/slot-pos-add-customer.component.module';
import { SlotPosAuditModule } from './tms/slot-pos-audit/slot-pos-audit.component.module';
import { SlotPosTicketModule } from './tms/slot-pos-ticket/slot-pos-ticket.component.module';
import { SlotPosStepModule } from './tms/slot-pos-step/slot-pos-step.component.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    SlotBookingInfoModule,
    SlotBookingAddModule,
    SlotBookingCalendarModule,
    SlotBookingCreateModule,
    SlotBookingSearchModule,
    SlotBookingDragDropModule,
    SlotBookingSummaryModule,
    SlotBookingDeliveryTimeModule,
    SlotBookingBookSlotModule,
    SlotPosSearchCustomerModule,
    SlotPosAddCustomerModule,
    SlotPosAuditModule,
    SlotPosTicketModule,
    SlotPosStepModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
