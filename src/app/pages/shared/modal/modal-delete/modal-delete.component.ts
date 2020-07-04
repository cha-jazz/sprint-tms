import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-modal-delete-component',
    templateUrl: './modal-delete.component.html',
    styleUrls: [],
})

export class ModalDeleteComponent {
    @Output() confirmDelete = new EventEmitter();
    modal = {
        title: '',
        sub_title: '',
        data: '',
    }
    slotInfoDelete(event: any) {
        console.log('slotInfoDelete',event)
        this.modal.title = 'ยืนยันการลบเวลานัดส่งสินค้า';
        this.modal.sub_title = 'เลขที่การจอง ' + event.shipmentNumber;
        this.modal.data = event;
    }
    delete(event: any) {
        this.confirmDelete.emit(event);
    }
}
