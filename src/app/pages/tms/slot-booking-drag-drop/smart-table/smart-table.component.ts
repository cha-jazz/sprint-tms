import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlotBookingService } from '../../../../services/tms/slotbooking.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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
  todo = [
    'Ticket 1',
    'Ticket 2',
    'Ticket 3',
    'Ticket 4',
    'Ticket 5',
    'Ticket 11',
    'Ticket 21',
    'Ticket 31',
    'Ticket 41',
    'Ticket 51',
    'Ticket 12',
    'Ticket 22',
    'Ticket 32',
    'Ticket 42',
    'Ticket 52',
  ];

  list = [
    {
      done: [
      ],
    },
    {
      done: [
      ],
    }, {
      done: [
      ],
    }, {
      done: [
      ],
    },
  ]
  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  back() {
    this.router.navigateByUrl('pages/slot-booking-create');
  }
  next() {
    this.router.navigateByUrl('pages/slot-booking-summary');
  }


}
