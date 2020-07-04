import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminGuard, RoleGuard } from '../guards/admin.guard';

import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { SlotBookingInfoComponent } from './tms/slot-booking-info/slot-booking-info.component';
import { SlotBookingAddComponent } from './tms/slot-booking-add/slot-booking-add.component';
import { SlotBookingCalendarComponent } from './tms/slot-booking-calendar/slot-booking-calendar.component';
import { SlotBookingSummaryComponent } from './tms/slot-booking-summary/slot-booking-summary.component';
import { SlotBookingCreateComponent } from './tms/slot-booking-create/slot-booking-create.component';
import { SlotBookingDragDropComponent } from './tms/slot-booking-drag-drop/slot-booking-drag-drop.component';
import { SlotBookingSearchComponent } from './tms/slot-booking-search/slot-booking-search.component';
import { SlotBookingDeliveryTimeComponent,
 } from './tms/slot-booking-delivery-time/slot-booking-delivery-time.component';
import { SlotPosStepComponent } from './tms/slot-pos-step/slot-pos-step.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'slot-booking-info',
      component: SlotBookingInfoComponent,
      canActivate: [AdminGuard],
    },
    {
      path: 'slot-booking-delivery-time',
      component: SlotBookingDeliveryTimeComponent,
      canActivate: [AdminGuard],
      data: {
        expectedRole: 'admin',
      },
    },
    {
      path: 'slot-pos-step',
      component: SlotPosStepComponent,
      canActivate: [AdminGuard],
      data: {
        expectedRole: 'admin',
      },
    },
    // {
    //   path: 'slot-booking-add',
    //   component: SlotBookingAddComponent,
    //   canActivate: [AdminGuard],
    //   data: {
    //     expectedRole: 'admin',
    //   },
    // },
    // {
    //   path: 'slot-booking-calendar',
    //   component: SlotBookingCalendarComponent,
    //   canActivate: [AdminGuard],
    //   data: {
    //     expectedRole: 'admin',
    //   },
    // },
    {
      path: 'slot-booking-create',
      component: SlotBookingCreateComponent,
    },
    {
      path: 'slot-booking-search',
      component: SlotBookingSearchComponent,
    },
    {
      path: 'slot-booking-drag-drop',
      component: SlotBookingDragDropComponent,
    },
    {
      path: 'slot-booking-summary',
      component: SlotBookingSummaryComponent,
    },
    {
      path: '',
      redirectTo: 'slot-booking-info',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
