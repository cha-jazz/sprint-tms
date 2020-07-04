import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotPosStepComponent } from './slot-pos-step.component';
import { SlotPosSearchCustomerModule} from '../slot-pos-search-customer/slot-pos-search-customer.component.module';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        SlotPosSearchCustomerModule,
    ],
    declarations: [
        SlotPosStepComponent,
    ],
})
export class SlotPosStepModule { }
