import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingBookSlotComponent } from './slot-booking-book-slot.component';

describe('SlotBookingBookSlotComponent', () => {
  let component: SlotBookingBookSlotComponent;
  let fixture: ComponentFixture<SlotBookingBookSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingBookSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingBookSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
