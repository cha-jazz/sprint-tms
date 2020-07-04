import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPosStepComponent } from './slot-pos-step.component';

describe('SlotPosStepComponent', () => {
  let component: SlotPosStepComponent;
  let fixture: ComponentFixture<SlotPosStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPosStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPosStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
