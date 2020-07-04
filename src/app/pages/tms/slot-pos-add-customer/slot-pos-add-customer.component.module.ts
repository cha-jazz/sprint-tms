import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotPosAddCustomerComponent } from './slot-pos-add-customer.component';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [
        SlotPosAddCustomerComponent,
    ],
})
export class SlotPosAddCustomerModule { }
