import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingInfoComponent } from './slot-booking-info.component';

describe('SlotBookingInfoComponent', () => {
  let component: SlotBookingInfoComponent;
  let fixture: ComponentFixture<SlotBookingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
