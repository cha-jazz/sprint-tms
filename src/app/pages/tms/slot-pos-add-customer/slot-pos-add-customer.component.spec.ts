import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPosAddCustomerComponent } from './slot-pos-add-customer.component';

describe('SlotPosAddCustomerComponent', () => {
  let component: SlotPosAddCustomerComponent;
  let fixture: ComponentFixture<SlotPosAddCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPosAddCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPosAddCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
