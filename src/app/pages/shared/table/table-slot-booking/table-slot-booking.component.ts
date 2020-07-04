import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import * as moment from 'moment';
import { TableSlotService } from '../../../../services/tms/table.service';
@Component({
    selector: 'ngx-table-slot-booking',
    templateUrl: './table-slot-booking.component.html',
    styleUrls: ['../../../../scss/main.scss'],
})
export class TableSlotBookingComponent {
    @Output() delete_table_slot = new EventEmitter();
    @ViewChild(MatSort, { static: true }) sort: MatSort;
    constructor(private tableSlotService: TableSlotService) {
        this.tableSlotService.currentMessage.subscribe(message => {
            this.transfer = message;
            this.showTable(this.table);
        });
    }
    transfer;
    table = {
        displayed_columns: ['shipmentNumber', 'zoneName', 'deliveryDate', 'deliveryDateLabel',
            'skucode', 'productName', 'serviceName', 'placeCodeSend', 'shipmentUser', 'timecount', 'action'],
        data_source: new MatTableDataSource(),
        length: 0,
        page_no: 1,
        page_size_options: [10, 20, 50, 100],
        page_size: 10,
        enabled: false,
        hide_page_size: false,
    };
    dateFormat(event: any) {
        return moment(event).format('MM-DD-YYYY');
    }
    showTable(event: any) {
        console.log('showTable', event)
        this.table.data_source.data = this.transfer;
        this.table.data_source.sort = this.sort;
    }

    delete(event: any) {
        console.log('delete',event)
        this.delete_table_slot.emit(event);
    }


}
