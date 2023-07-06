import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  private map: L.Map;
  
  private InitMap(): void {
    this.map = L.map('map', {
      center: [ 53.9, 27.5667 ],
      zoom: 13
    });

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    const marker = L.marker([53.89845797946835, 27.56048004683752]);

    tiles.addTo(this.map); 
    marker.addTo(this.map);
  }

  constructor() { }
  ngOnInit(): void { 
    this.InitMap();
  }
}