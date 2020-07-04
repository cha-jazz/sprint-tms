import { NgModule } from '@angular/core';
import { ThemeModule } from '../../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotPosSearchCustomerComponent } from './slot-pos-search-customer.component';
@NgModule({
    imports: [
        FormsModule,
        ThemeModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [
        SlotPosSearchCustomerComponent,
    ],
    exports: [
        SlotPosSearchCustomerComponent,
    ],
})
export class SlotPosSearchCustomerModule { }
