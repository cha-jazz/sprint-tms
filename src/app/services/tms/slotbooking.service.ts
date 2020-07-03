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

export class SlotBookingService {
    constructor(
        private client: HttpClient,
        private configService: ConfigService,
        private alertTMSService: AlertTMSService,
    ) { }

    keyLock(event) {
        if ((event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)
            || event.target.value.trim().length <= 3) {
            return false;
        }
        return true;
    }

    async getBookingSearch(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('placeCode', req.placeCode);
            let api = this.configService.getPath().TMS.SlotBooking + 'api/BookingLogs/search';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }
    async getBookingCancel(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('bookingNumber', req.bookingNumber);
            params = params.append('userCode', req.userCode);
            let api = this.configService.getPath().TMS.SlotBooking + 'api/BookingLogs/cancel';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getAddProductAutoComplete(req) {
        try {
            let api = this.configService.getPath().TMS.Product + 'api/products/autocomplete/' + req;
            console.log('api', api);

            let result = await this.client.get(api)
                .toPromise();
            return result;
        } catch (error) {
            // this.alertTMSService.AlertError(error);
        }
    }

    async getAddDeliveryList() {
        try {
            let api = this.configService.getPath().TMS.Master + 'api/deliveryoptions';
            console.log('api', api);

            let result = await this.client.get(api)
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getAddServiceTypeList(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('productCode', req.productCode);
            let api = this.configService.getPath().TMS.Master + 'api/ServiceTypes/productServiceType';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getAddDeliveryAddressAutoComplete(req) {
        try {
            let params = new HttpParams();
            params = params.append('searchText', req.searchText);
            let api = this.configService.getPath().TMS.Master + 'api/subdistricts/shippingArea';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            // this.alertTMSService.AlertError(error);
        }
    }

    async getAddDeliveryStoreList(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('serviceTypeCode', req.serviceTypeCode);
            params = params.append('subDistrictCode', req.subDistrictCode);
            let api = this.configService.getPath().TMS.Master + 'api/places/branchsender';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getAddOtherStoreList(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('deliveryPlaceCode', req.deliveryPlaceCode);
            let api = this.configService.getPath().TMS.Master + 'api/places/pickupPlace';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getAddZoneList(req) {
        try {
            let params = new HttpParams();
            params = params.append('buCode', req.buCode);
            params = params.append('serviceTypeCode', req.serviceTypeCode);
            params = params.append('sendStoreCode', req.sendStoreCode);
            params = params.append('subDistrictCode', req.subDistrictCode);
            let api = this.configService.getPath().TMS.Master + 'api/zones/availZone';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async getCalendarSearch(req) {
        try {
            let params = new HttpParams();
            params = params.append('serviceCode', req.serviceCode);
            params = params.append('sendPlaceCode', req.sendPlaceCode);
            params = params.append('zoneCode', req.zoneCode);
            params = params.append('searchStartDate', req.searchStartDate);
            params = params.append('searchEndDate', req.searchEndDate);
            params = params.append('deliveryOptionCode', req.deliveryOptionCode);

            let api = this.configService.getPath().TMS.SlotBooking + 'api/SlotBooking/search';
            console.log('api', api);

            let result = await this.client.get(api, { params: params })
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }

    async postCalendarSave(req) {
        try {
            let send_data = {
                sendPlaceCode: req.sendPlaceCode,
                stockplaceCode: req.stockplaceCode,
                sellPlaceCode: req.sellPlaceCode,
                serviceCode: req.serviceCode,
                zoneCode: req.zoneCode,
                productCode: req.productCode,
                deliveryOptionCode: req.deliveryOptionCode,
                truckCategoryCode: req.truckCategoryCode,
                bookingDate: req.bookingDate,
                slotCode: req.slotCode,
                userCode: req.userCode,
            }
            console.log('send_data', send_data);

            let api = this.configService.getPath().TMS.SlotBooking + 'api/SlotBooking/bookslot';
            console.log('api', api);

            let result = await this.client.post(api, send_data, httpOptions)
                .toPromise();
            return result;
        } catch (error) {
            this.alertTMSService.AlertError(error);
        }
    }
}

