import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponentComponent } from './map-leaflet-geometry.component';

describe('MapComponentComponent', () => {
  let component: MapComponentComponent;
  let fixture: ComponentFixture<MapComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
