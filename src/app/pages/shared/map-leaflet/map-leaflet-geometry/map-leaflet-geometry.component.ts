import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'ngx-map-geometry-component',
  templateUrl: './map-leaflet-geometry.component.html',
  styleUrls: ['./map-leaflet-geometry.component.scss']
})
export class MapLeafletGeometryComponent {
  map: L.Map;
  json;
  hide_map = true;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      })
    ],
    zoom: 11,
    center: L.latLng(0, 0)
  };

  constructor() { }

  onMapReady(map: L.Map) {
    this.map = map;
    this.layerGroup = new L.LayerGroup(); // create layer for add polygon
  }
  layerPostalcodes: any;
  layerGroup: any;
  getZone(event) {
    console.log('getZone', event.value);
    if (this.layerPostalcodes) { // check geo have value
      this.layerGroup.removeLayer(this.layerPostalcodes);
    }
    this.hide_map = false;
    this.layerGroup.addTo(this.map);
    this.json = {
      'type': 'FeatureCollection',
      'features': [
        {
          'type': 'Feature',
          'geometry': JSON.parse(event.value.zoneGeo),
        },
      ],
    };
    this.layerPostalcodes = L.geoJSON(this.json).addTo(this.map);
    this.layerGroup.addLayer(this.layerPostalcodes);
    // L.geoJSON(this.json).addTo(this.map);
    // console.log('get la long', JSON.parse(event.value.zoneGeo));
    if (JSON.parse(event.value.zoneGeo).type === 'Polygon') {
      this.map.panTo(new L.LatLng(JSON.parse(event.value.zoneGeo).coordinates[0][0][1],
        JSON.parse(event.value.zoneGeo).coordinates[0][0][0]));
    } else {
      console.log('multi', JSON.parse(event.value.zoneGeo));
      this.map.panTo(new L.LatLng(JSON.parse(event.value.zoneGeo).coordinates[0][0][0][1],
        JSON.parse(event.value.zoneGeo).coordinates[0][0][0][0]));
    }
  }

  hideMap() {
    this.hide_map = true;
  }
}
