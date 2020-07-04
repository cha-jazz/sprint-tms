import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlotPosAuditComponent } from './slot-pos-audit.component';
@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    ],
    declarations: [
        SlotPosAuditComponent,
    ],
})
export class SlotPosAuditModule { }
