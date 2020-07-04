import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { TranslateModule } from '@ngx-translate/core';

import { ThemeModule } from '../../../@theme/theme.module';

import { TableSlotBookingComponent} from './table-slot-booking/table-slot-booking.component';
import { ModalModule} from '../modal/modal.component.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
    imports: [
        ThemeModule,
        FormsModule,
        HttpClientModule,
        MatTableModule,
        MatSortModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        TranslateModule,
        ModalModule,
    ],
    providers: [CookieService],
    declarations: [
        TableSlotBookingComponent,
    ],
    exports: [
        TableSlotBookingComponent,
    ],
})
export class TableModule { }
