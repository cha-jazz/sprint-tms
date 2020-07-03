import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['../../../../shared/main.scss', './smart-table.component.scss'],
})

export class SmartTableComponent implements OnInit {
  @ViewChild('pref_product', { static: false }) pref_product: ElementRef;
  @ViewChild('pref_delivery_address', { static: false }) pref_delivery_address: ElementRef;

  constructor(
    private slotService: SlotBookingService,
    private router: Router,
  ) { }

  submit_data = {
    product: new FormControl('', Validators.required),
    delivery_type: new FormControl({ value: '', disabled: true }, Validators.required),
    service_type: new FormControl({ value: '', disabled: true }, Validators.required),
    delivery_address: new FormControl({ value: '', disabled: true }, Validators.required),
    delivery_store: new FormControl({ value: '', disabled: true }, Validators.required),
    check_other_store: new FormControl({ value: false, disabled: true }),
    other_store: new FormControl({ value: '', disabled: true }),
    zone_select: new FormControl('', Validators.required),
    click: false,
  };
  select = {
    delivery_type: [],
    service_type: [],
    delivery_store: [],
    other_store: [],
    zones: [],
  };
  options = {
    product: [],
    delivery_address: [],
  };
  filteredOptions_product: Observable<string[]>;
  filteredOptions_delivery_address: Observable<string[]>;

  ngOnInit(): void {
    this.getDeliveryType();
  }


  displayFn_product(data): string {
    return data && data.name ? data.name : '';
  }

  displayFn_delivery_address(data): string {
    return data && data.nameLocal ? data.nameLocal : '';
  }

  private _filterProduct(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.product.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private _filterDeliveryAddress(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.delivery_address.filter(option => option.nameLocal.toLowerCase().includes(filterValue));
  }

  async create() {
    // console.log('create', this.submit_data);
    if (this.validate() === 0) {

      let response: any = {
        product: this.submit_data.product.value,
        delivery_type: this.submit_data.delivery_type.value,
        service_type: this.submit_data.service_type.value,
        delivery_address: this.submit_data.delivery_address.value,
        delivery_store: this.submit_data.delivery_store.value,
        check_other_store: this.submit_data.check_other_store.value,
        other_store: this.submit_data.other_store.value,
        zone_select: this.submit_data.zone_select.value,
      };
      this.router.navigateByUrl('pages/slot-booking-calendar', { state: response });

    }
  }

  async reset() {
    this.submit_data.product.setValue('');
    this.submit_data.delivery_type.setValue('');
    this.submit_data.service_type.setValue('');
    this.submit_data.delivery_address.setValue('');
    this.submit_data.delivery_store.setValue('');
    this.submit_data.check_other_store.setValue('');
    this.submit_data.other_store.setValue('');
    this.submit_data.zone_select.setValue('');
    // this.submit_data.image = false;

    this.submit_data.delivery_type.disable();
    this.submit_data.service_type.disable();
    this.submit_data.delivery_address.disable();
    this.submit_data.delivery_address.disable();
    this.submit_data.delivery_store.disable();
    this.submit_data.check_other_store.disable();
    this.submit_data.other_store.disable();
    this.select.zones = [];
    this.submit_data.click = false;

  }

  async getDeliveryType() {
    let response: any = await this.slotService.getAddDeliveryList();
    if (response) {
      console.log('response', response);
      this.select.delivery_type = response.deliveryOptions;
    }
  }

  onKeyMainProduct(event: any) {
    // console.log(event);
    if (this.slotService.keyLock(event) === true) {
      let temp = event.target.value;
      setTimeout(() => {
        if (event.target.value === temp) {
          // console.log('onKeyMainProduct', event.target.value);
          this.getProduct(event.target.value);

        }
      }, 1500);
    }
  }

  async getProduct(data) {
    console.log('getProduct', data);
    let response: any = await this.slotService.getAddProductAutoComplete(data);
    if (response) {
      console.log('res', response);
      this.options.product = response.products;
      this.filteredOptions_product = this.submit_data.product.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterProduct(name) : this.options.product.slice()),
        );
    }
  }

  onKeyMainDeliveryAddress(event: any) {

    if (this.slotService.keyLock(event) === true) {
      let temp = event.target.value;
      setTimeout(() => {
        if (event.target.value === temp) {
          // console.log('onKeyMainDeliveryAddress', event.target.value);
          this.getDeliveryAddress(event.target.value);
        }
      }, 1500);
    }
  }

  async getDeliveryAddress(data) {
    console.log('getDeliveryAddress', data);
    let req = { searchText: data };
    let response: any = await this.slotService.getAddDeliveryAddressAutoComplete(req);
    if (response) {
      console.log('res', response);
      this.options.delivery_address = response.shippingAreas;
      this.filteredOptions_delivery_address = this.submit_data.delivery_address.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterDeliveryAddress(name) : this.options.delivery_address.slice()),
        );
    }
  }

  onSelectionChangeProduct(event: any) {
    // console.log('onSelectionChangeProduct', event.option.value);
    this.submit_data.delivery_type.enable();
  }

  async onSelectionChangeDeliveryType(event: any) {
    // console.log('onSelectionChangeDeliveryType', event);
    this.submit_data.service_type.enable();
    let req = {
      buCode: 'PWB',
      productCode: this.submit_data.product.value.productCode,
    }
    let response: any = await this.slotService.getAddServiceTypeList(req);
    if (response) {
      console.log(response);
      this.select.service_type = response.serviceTypes;
    }
  }

  onSelectionChangeServiceType(event: any) {
    // console.log('onSelectionChangeServiceType', event);
    this.submit_data.delivery_address.enable();
  }

  async onSelectionChangeDeliveryAddress(event: any) {
    // console.log('onSelectionChangeDeliveryAddress', event);
    this.submit_data.delivery_store.enable();
    let req = {
      buCode: 'PWB',
      serviceTypeCode: this.submit_data.service_type.value.serviceCode,
      subDistrictCode: this.submit_data.delivery_address.value.subDistrictCode,
    };
    let response: any = await this.slotService.getAddDeliveryStoreList(req);
    if (response) {
      console.log('response', response);
      this.select.delivery_store = [];
      response.stores[0].wareHouse.forEach(element => {
        this.select.delivery_store.push(element);
      });
      response.stores[0].store.forEach(element => {
        this.select.delivery_store.push(element);
      });
    }
  }

  async onSelectionChangeDeliveryStore(event: any) {
    this.submit_data.check_other_store.enable();
    let req = {
      buCode: 'PWB',
      serviceTypeCode: this.submit_data.service_type.value.serviceCode,
      sendStoreCode: this.submit_data.delivery_store.value.placeCode,
      subDistrictCode: this.submit_data.delivery_address.value.subDistrictCode,
    };
    let response: any = await this.slotService.getAddZoneList(req);
    if (response) {
      console.log('response', response);
      this.select.zones = response.zones;

    }
  }

  async onChangeCheckOtherStore(event: any) {
    // console.log('onChangeCheckOtherStore', event);
    if (event.checked === true) {
      this.submit_data.other_store.enable();
      let req = {
        buCode: 'PWB',
        deliveryPlaceCode: '00004',
      }
      let response: any = await this.slotService.getAddOtherStoreList(req);
      if (response) {
        console.log(response);
        this.select.other_store = [];
        response.stores[0].wareHouse.forEach(element => {
          this.select.other_store.push(element);
        });
        response.stores[0].store.forEach(element => {
          this.select.other_store.push(element);
        });
      }
    } else {
      this.submit_data.other_store.disable();
    }
  }
  onSelectZone(event: any) {
    console.log('onSelectZone', event);
  }

  validate() {
    let validateCount = 0;
    if (this.submit_data.zone_select.status === 'INVALID') {
      this.submit_data.zone_select.markAsTouched();
      this.submit_data.click = true;
      validateCount++;
    }
    if (this.submit_data.delivery_store.status === 'INVALID') {
      this.submit_data.delivery_store.markAsTouched();
      validateCount++;
    }
    if (this.submit_data.delivery_address.status === 'INVALID') {
      this.submit_data.delivery_address.markAsTouched();
      this.pref_delivery_address.nativeElement.focus();
      validateCount++;
    }
    if (this.submit_data.service_type.status === 'INVALID') {
      this.submit_data.service_type.markAsTouched();
      validateCount++;
    }
    if (this.submit_data.delivery_type.status === 'INVALID') {
      this.submit_data.delivery_type.markAsTouched();
      validateCount++;
    }
    if (this.submit_data.product.status === 'INVALID') {
      this.submit_data.product.markAsTouched();
      this.pref_product.nativeElement.focus();
      validateCount++;
    }
    return validateCount;
  }
}
