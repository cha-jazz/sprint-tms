import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBookingDragDropComponent } from './slot-booking-drag-drop.component';

describe('SlotBookingDragDropComponent', () => {
  let component: SlotBookingDragDropComponent;
  let fixture: ComponentFixture<SlotBookingDragDropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotBookingDragDropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotBookingDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
