import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
    providedIn: 'root',
})

export class ConfigService {

    getPath() {
        const path = require('../../assets/configpath/appsettings.json');
        return path;
    }
}
