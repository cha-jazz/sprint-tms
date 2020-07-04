import { Component, OnInit } from '@angular/core';
import { SlotPosService } from '../../../services/tms/slotpos.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'ngx-slot-pos-search-customer',
  templateUrl: './slot-pos-search-customer.component.html',
  styleUrls: ['./slot-pos-search-customer.component.scss']
})
export class SlotPosSearchCustomerComponent implements OnInit {

  constructor(
    private slotPosService: SlotPosService,
  ) { }

  select = {
    type: [],
  };
  search = {
    type: new FormControl(''),

  };

  ngOnInit() {
    this.getType();
  }

  async getType() {
    let req = {
      buCode: localStorage.getItem('buCodeTMS'),
    };
    let response: any = await this.slotPosService.getTypeSearchList(req);
    if (response) {
      console.log(response);
      this.select.type = response.categoryResponse;
    }
  }

  onSelectionChangeType(event: any) {

  }

}
