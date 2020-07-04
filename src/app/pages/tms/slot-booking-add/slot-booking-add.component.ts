import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlotBookingService } from '../../../services/tms/slotbooking.service';

@Component({
  selector: 'ngx-slot-booking-add',
  templateUrl: './slot-booking-add.component.html',
  styleUrls: ['./slot-booking-add.component.scss',
    '../../../scss/main.scss'],
})
export class SlotBookingAddComponent implements OnInit {
  @Output() confirmAdd = new EventEmitter();

  constructor(
    private slotService: SlotBookingService,
  ) { }
  submit_data = {
    product: new FormControl('', Validators.required),
    delivery_type: new FormControl({ value: '', disabled: true }, Validators.required),
    service_type: new FormControl({ value: '', disabled: true }, Validators.required),
    delivery_address: new FormControl({ value: '', disabled: true }, Validators.required),
    delivery_store: new FormControl({ value: '', disabled: true }, Validators.required),
    check_other_store: new FormControl({ value: false, disabled: true }),
    other_store: new FormControl({ value: '', disabled: true }, Validators.required),
    zone_select: new FormControl('', Validators.required),
    click: false,
  };
  css = {
    product: '',
    delivery_type: '',
    service_type: '',
    delivery_address: '',
    delivery_store: '',
    other_store: '',
    zone_select: '',
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
    console.log('create', this.submit_data);
    // ($('#collapseOne') as any).collapse('true');
    if (this.validate() === 0) {
      console.log('pass create');
      ($('#collapseTwo') as any).collapse('show');
      this.confirmAdd.emit(this.submit_data);
      //   let response: any = {
      //     product: this.submit_data.product.value,
      //     delivery_type: this.submit_data.delivery_type.value,
      //     service_type: this.submit_data.service_type.value,
      //     delivery_address: this.submit_data.delivery_address.value,
      //     delivery_store: this.submit_data.delivery_store.value,
      //     check_other_store: this.submit_data.check_other_store.value,
      //     other_store: this.submit_data.other_store.value,
      //     zone_select: this.submit_data.zone_select.value,
      //   };

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
    this.css.product = '';
    if (this.slotService.keyLock(event) === true) {
      let temp = event.target.value;
      setTimeout(() => {
        if (event.target.value === temp) {
          // console.log('onKeyMainProduct', event.target.value);
          this.getProduct(event.target.value);

        }
      }, 500);
    }
  }

  async getProduct(data) {
    // console.log('getProduct', data);
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
    this.css.delivery_address = '';
    if (this.slotService.keyLock(event) === true) {
      let temp = event.target.value;
      setTimeout(() => {
        if (event.target.value === temp) {
          // console.log('onKeyMainDeliveryAddress', event.target.value);
          this.getDeliveryAddress(event.target.value);
        }
      }, 500);
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
          map(value => typeof value === 'string' ? value : value.nameLocal),
          map(name => name ? this._filterDeliveryAddress(name) : this.options.delivery_address.slice()),
        );
    }
  }

  onSelectionChangeProduct(event: any) {
    // console.log('onSelectionChangeProduct', event.option.value);
    this.css.product = '';
    this.submit_data.delivery_type.enable();
    this.submit_data.delivery_type.setValue('');
  }

  async onSelectionChangeDeliveryType(event: any) {
    console.log('onSelectionChangeDeliveryType', this.submit_data.product.value.productCode);
    this.css.delivery_type = '';
    this.submit_data.service_type.enable();
    this.submit_data.service_type.setValue('');
    let req = {
      buCode: localStorage.getItem('buCodeTMS'),
      productCode: this.submit_data.product.value.productCode,
    }
    let response: any = await this.slotService.getAddServiceTypeList(req);
    if (response) {
      console.log(response);
      this.select.service_type = response.serviceTypes;
    }
  }

  onSelectionChangeServiceType(event: any) {
    console.log('onSelectionChangeServiceType', this.submit_data.service_type.value);
    this.css.service_type = '';
    this.submit_data.delivery_address.enable();
    this.submit_data.delivery_address.setValue('');
  }

  async onSelectionChangeDeliveryAddress(event: any) {
    console.log('onSelectionChangeDeliveryAddress', event);
    this.css.delivery_address = '';
    this.submit_data.delivery_store.enable();
    this.submit_data.delivery_store.setValue('');
    let req = {
      buCode: localStorage.getItem('buCodeTMS'),
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
      this.submit_data.delivery_store.setValue(this.select.delivery_store[0]);
      this.onSelectionChangeDeliveryStore('');
      // กรณีอยากหาตัวเฉพาะ
      // const found = this.select.delivery_store.find(element => element.placeCode === '00196');
      // if (found) {
      //   this.submit_data.delivery_store.setValue(found);
      //   this.onSelectionChangeDeliveryStore('');
      // }
    }
  }
  compareFnDeliveryStore(optionOne: any, optionTwo: any): boolean {
    return optionOne.placeCode === optionTwo.placeCode;
  }

  async onSelectionChangeDeliveryStore(event: any) {
    this.css.delivery_store = '';
    // this.submit_data.check_other_store.enable();
    // this.submit_data.check_other_store.setValue('');
    this.submit_data.other_store.setValue('');
    this.submit_data.other_store.enable();
    this.submit_data.zone_select.setValue('');
    let req = {
      buCode: localStorage.getItem('buCodeTMS'),
      serviceTypeCode: this.submit_data.service_type.value.serviceCode,
      sendStoreCode: this.submit_data.delivery_store.value.placeCode,
      subDistrictCode: this.submit_data.delivery_address.value.subDistrictCode,
    };
    let response: any = await this.slotService.getAddZoneList(req);
    if (response) {
      console.log('response', response);
      this.select.zones = response.zones;
    }
    this.getCheckOtherStore();
  }

  async getCheckOtherStore() {
    // console.log('onChangeCheckOtherStore', event);
    this.submit_data.other_store.setValue('');
    // if (event.checked === true) {
    let req = {
      buCode: localStorage.getItem('buCodeTMS'),
      deliveryPlaceCode: this.submit_data.delivery_store.value.placeCode,
    };
    let response: any = await this.slotService.getAddOtherStoreList(req);
    if (response) {
      console.log('response', response);
      this.select.other_store = [];
      response.pickupPlaces[0].storeSelf.forEach(element => {
        this.select.other_store.push(element);
      });
      response.pickupPlaces[0].wareHouse.forEach(element => {
        this.select.other_store.push(element);
      });
      response.pickupPlaces[0].store.forEach(element => {
        this.select.other_store.push(element);
      });
      this.submit_data.other_store.setValue(this.select.other_store[0]);
    } else {
      // this.submit_data.check_other_store.setValue(false);
      this.submit_data.other_store.disable();
    }
    // } else {
    //  this.submit_data.other_store.disable();
    // }
  }

  compareFnOtherStore(optionOne: any, optionTwo: any): boolean {
    return optionOne.placeNameEn === optionTwo.placeNameEn;
  }

  onSelectionOtherStore(event: any) {
    this.css.other_store = '';
  }
  onSelectZone(event: any) {
    this.css.zone_select = '';
    // console.log('onSelectZone', this.submit_data.zone_select);
  }

  validate() {
    let validateCount = 0;
    if (this.submit_data.zone_select.status === 'INVALID') {
      // this.submit_data.click = true;
      this.css.zone_select = 'has-error';
      validateCount++;
    }
    if (this.submit_data.other_store.status === 'INVALID' || this.submit_data.other_store.status === 'DISABLED') {
      this.css.other_store = 'has-error';
      validateCount++;
    }
    if (this.submit_data.delivery_store.status === 'INVALID' || this.submit_data.delivery_store.status === 'DISABLED') {
      this.css.delivery_store = 'has-error';
      validateCount++;
    }
    if (this.submit_data.delivery_address.status === 'INVALID' ||
      this.submit_data.delivery_address.status === 'DISABLED') {
      this.css.delivery_address = 'has-error';
      validateCount++;
    }
    if (this.submit_data.service_type.status === 'INVALID' || this.submit_data.service_type.status === 'DISABLED') {
      this.css.service_type = 'has-error';
      validateCount++;
    }
    if (this.submit_data.delivery_type.status === 'INVALID' || this.submit_data.delivery_type.status === 'DISABLED') {
      this.css.delivery_type = 'has-error';
      validateCount++;
    }
    if (this.submit_data.product.status === 'INVALID') {
      this.css.product = 'has-error';
      validateCount++;
    }
    return validateCount;
  }
}
