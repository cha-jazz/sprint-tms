import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLeafletMarkerComponent } from './map-leaflet-marker.component';

describe('MapComponentComponent', () => {
  let component: MapLeafletMarkerComponent;
  let fixture: ComponentFixture<MapLeafletMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLeafletMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLeafletMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
