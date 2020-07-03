import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingSearchComponent } from './slot-booking-search.component';

describe('SlotBookingSearchComponent', () => {
  let component: SlotBookingSearchComponent;
  let fixture: ComponentFixture<SlotBookingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
