import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingDeliveryTimeComponent } from './slot-booking-delivery-time.component';

describe('SlotBookingDeliveryTimeComponent', () => {
  let component: SlotBookingDeliveryTimeComponent;
  let fixture: ComponentFixture<SlotBookingDeliveryTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingDeliveryTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingDeliveryTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
