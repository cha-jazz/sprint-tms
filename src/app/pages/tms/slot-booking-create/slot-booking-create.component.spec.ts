import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingCreateComponent } from './slot-booking-create.component';

describe('SlotBookingCreateComponent', () => {
  let component: SlotBookingCreateComponent;
  let fixture: ComponentFixture<SlotBookingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
