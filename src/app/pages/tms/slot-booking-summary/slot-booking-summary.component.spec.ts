import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingSummaryComponent } from './slot-booking-summary.component';

describe('SlotBookingSummaryComponent', () => {
  let component: SlotBookingSummaryComponent;
  let fixture: ComponentFixture<SlotBookingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
