import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CalendarSlotService {

    private messageSource = new BehaviorSubject('');
    currentMessage = this.messageSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        // console.log('changeMessage', message)
        this.messageSource.next(message);
    }

}
