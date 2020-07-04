import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotPosTicketComponent } from './slot-pos-ticket.component';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [
        SlotPosTicketComponent,
    ],
})
export class SlotPosTicketModule { }
