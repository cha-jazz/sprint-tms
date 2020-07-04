import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from '../config-path.service';
import { AlertService, AlertTMSService } from '../alert/alert.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    }),
};
@Injectable({
    providedIn: 'root',
})

export class SlotPosService {
    constructor(
        private client: HttpClient,
        private configService: ConfigService,
        private alertTMSService: AlertTMSService,
    ) { }
    async getTypeSearchList(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            console.log('param', params);
            let api = this.configService.getPath().TMS.Customer + 'api/customers/dropdown';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            return error;
        }
    }
}
