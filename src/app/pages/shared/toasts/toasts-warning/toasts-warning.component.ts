import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-toast-warning-component',
    templateUrl: './toasts-warning.component.html',
    styleUrls: [],
})

export class ToastWarningComponent {

    @Input() toast_message: any;
}
