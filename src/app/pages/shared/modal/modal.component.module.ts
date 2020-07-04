import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ToastModule} from '../toasts/toasts.component.module';

@NgModule({
    imports: [
        CommonModule,
        ToastModule,
    ],
    providers: [],
    declarations: [ModalDeleteComponent],
    exports: [ModalDeleteComponent],
})
export class ModalModule { }
