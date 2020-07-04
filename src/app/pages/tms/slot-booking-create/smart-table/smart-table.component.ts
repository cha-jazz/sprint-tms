import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  // styleUrls: ['../../../../shared/main.scss', './smart-table.component.scss'],
})

export class SmartTableComponent implements OnInit {

  constructor(
    private slotService: SlotBookingService,
    private router: Router,
  ) { }
  table = {
    displayed_columns: ['bookingNumber', 'zoneName', 'deliveryDate', 'deliveryDateLabel',
      'skuCode', 'productName', 'serviceName', 'bookingUser', 'timecount', 'action'],
    data_source: new MatTableDataSource(),
  };
  data = '';

  ngOnInit(): void {

  }

  fruits = [
  ];

  back() {

  }
  next() {
    this.router.navigateByUrl('pages/slot-booking-drag-drop');
  }

  searchCustomer() {
    this.router.navigateByUrl('pages/slot-booking-search');
  }

  addPosTicket(): void {
    if ((this.data || '').trim()) {
      this.fruits.push({ name: this.data.trim() });
      this.data = '';
    }
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}
