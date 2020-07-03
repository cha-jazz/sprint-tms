import { Component, OnInit } from '@angular/core';
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon.png';
import * as L from 'leaflet';

@Component({
  selector: 'ngx-map-marker-component',
  templateUrl: './map-leaflet-marker.component.html',
  styleUrls: ['./map-leaflet-marker.component.scss']
})
export class MapLeafletMarkerComponent {

  marker;
  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '',
      }),
    ],
    zoom: 15,
    center: L.latLng(13.746620, 100.539281),
  };


  onMapReady(map: L.Map) {
    console.log('map', map);
    this.marker = L.marker([13.746620, 100.539281], {
      icon: L.icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/leaflet-image/marker-icon.png',
        shadowUrl: 'assets/leaflet-image/marker-shadow.png',
        popupAnchor: [0, -33],
      }),
      draggable: true, clickable: true,
    });

    this.marker.on('dragend', (e) => {
      e.target.getLatLng().lat;
      e.target.getLatLng().lng;
      console.log('e.target.getLatLng().lat', e.target.getLatLng().lat);
      console.log(' e.target.getLatLng().lng;', e.target.getLatLng().lng);
    }).addTo(map);

    this.marker.bindPopup('<b>Hello world!</b><br>I am here.').openPopup();

  }

}
