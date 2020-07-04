import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToastWarningComponent } from './toasts-warning/toasts-warning.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [],
    declarations: [ToastWarningComponent],
    exports: [ToastWarningComponent],
})
export class ToastModule { }
