import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotPosAuditComponent } from './slot-pos-audit.component';

describe('SlotPosAuditComponent', () => {
  let component: SlotPosAuditComponent;
  let fixture: ComponentFixture<SlotPosAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotPosAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlotPosAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
