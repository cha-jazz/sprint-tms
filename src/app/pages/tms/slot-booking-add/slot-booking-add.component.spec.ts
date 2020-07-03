import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingAddComponent } from './slot-booking-add.component';

describe('SlotBookingAddComponent', () => {
  let component: SlotBookingAddComponent;
  let fixture: ComponentFixture<SlotBookingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
