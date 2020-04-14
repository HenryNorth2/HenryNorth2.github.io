import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { PropertyService } from '../../services/property.service';

// const tempProperties = [
//   { propertyId: 1, name: "House 1", listingId: "1" },
//   { propertyId: 2, name: "House 2", listingId: "2" },
//   { propertyId: 3, name: "House 3", listingId: "3" },
//   { propertyId: 4, name: "House 4", listingId: "4" },
//   { propertyId: 5, name: "House 5", listingId: "5" },
//   { propertyId: 6, name: "House 6", listingId: "6" },
// ];

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties:Property[];

  constructor(private propertyService:PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
      console.log(properties);
    });
    //this.properties = tempProperties;
  }

}
