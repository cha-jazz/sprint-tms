import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingCalendarComponent } from './slot-booking-calendar.component';

describe('SlotBookingCalendarComponent', () => {
  let component: SlotBookingCalendarComponent;
  let fixture: ComponentFixture<SlotBookingCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
