import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { SlotBookingInfoComponent } from './slot-booking-info.component';

import { ModalModule} from '../../shared/modal/modal.component.module';
import { ToastModule} from '../../shared/toasts/toasts.component.module';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';



@NgModule({
    imports: [
        ThemeModule,
        FormsModule,
        // NbActionsModule,
        // NbButtonModule,
        // NbCardModule,
        // NbTabsetModule,
        // NbUserModule,
        // NbRadioModule,
        // NbSelectModule,
        // NbListModule,
        // NbIconModule,
        HttpClientModule,
        // NbDatepickerModule,
        // NbInputModule,
        // NbDialogModule.forChild(),
        // NbPopoverModule,
        // NbSpinnerModule,
        // NbToggleModule,
        MatTableModule,
        MatSortModule,
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
        TranslateModule,
        ModalModule,
        ToastModule,

    ],
    providers: [CookieService],
    declarations: [
        SlotBookingInfoComponent,
    ],
})
export class SlotBookingInfoModule { }
