import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['../../../../shared/main.scss', './smart-table.component.scss'],
})

export class SmartTableComponent implements OnInit {
  constructor(
    private slotService: SlotBookingService,
    private router: Router,
  ) { }

  select = {
    condition: ['เบอร์โทรศัพท์', 'ชื่อ-นามสกุล', 'เลขบัตรประชาชน/Passport', 'เลข The1 Card'],
  };
  table = {
    displayed_columns: ['name', 'email', 'phone', 'the1card',
      'address'],
    data_source: new MatTableDataSource(),
  };

  ngOnInit(): void {
  }

  search() {
    this.table.data_source.data = [
      {
        name: 'นาย สมชาย นำเมือง',
        email: 'somchai@gmail.com',
        phone: '080-093-6676',
        the1card: '5444444444444',
        address: '767 โครงการบิน แขวงบางหว้า เขตภาษี',
      }
    ]
  }
  getDetail(event: any) {
    console.log(event)
    this.router.navigateByUrl('pages/slot-booking-create');
  }
  back(){
    this.router.navigateByUrl('pages/slot-booking-create');
  }

}
