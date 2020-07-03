import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapLeafletGeometryComponent } from './map-leaflet-geometry/map-leaflet-geometry.component';
import { MapLeafletMarkerComponent } from './map-leaflet-marker/map-leaflet-marker.component';

@NgModule({
    imports: [
        LeafletModule.forRoot(),
        CommonModule,
    ],
    providers: [],
    declarations: [MapLeafletGeometryComponent, MapLeafletMarkerComponent],
    exports: [MapLeafletGeometryComponent, MapLeafletMarkerComponent],
})
export class MapLeafletModule { }
