import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPosSearchCustomerComponent } from './slot-pos-search-customer.component';

describe('SlotPosSearchCustomerComponent', () => {
  let component: SlotPosSearchCustomerComponent;
  let fixture: ComponentFixture<SlotPosSearchCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPosSearchCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPosSearchCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
