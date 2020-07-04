import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPosTicketComponent } from './slot-pos-ticket.component';

describe('SlotPosTicketComponent', () => {
  let component: SlotPosTicketComponent;
  let fixture: ComponentFixture<SlotPosTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPosTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPosTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
