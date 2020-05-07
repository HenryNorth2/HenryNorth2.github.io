import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @Input() latitude: number;
  @Input() longitude: number;
  map: google.maps.Map;
  lat: number;
  lng: number;
  coordinates: any;

  ngOnInit(): void {
    this.lat = Number(this.latitude);
    this.lng = Number(this.longitude);

    this.coordinates = new google.maps.LatLng(this.lat, this.lng);
  }

  mapOptions: google.maps.MapOptions = {
   center: this.coordinates,
   zoom: 8
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
    this.mapOptions);
    this.marker.setMap(this.map);
  }
}
