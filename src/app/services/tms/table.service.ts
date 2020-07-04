import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TableSlotService {

    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    dataTableMessage(message: any) {
        // console.log('changeMessage', message)
        this.messageSource.next(message);
    }

    deleteTableMessage(message: any) {

    }

}
