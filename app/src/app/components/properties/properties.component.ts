import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { PropertyService } from '../../services/property.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Property[];
  pageSize: number = 3;
  page: number = 1;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  filterProperties(filters: any) {
    this.propertyService.getProperties().subscribe(properties => {
      console.log(filters.propertyTypeValue);

      let filteredProperties: any;

      if (filters.propertyTypeValue === null) {
        filteredProperties = properties.filter((property) => {
          if (property.details.price > filters.maxPriceValue || property.details.bedrooms < filters.minBedroomsValue) {
            return false;
          };
          return true;
        });
      } else {
        filteredProperties = properties.filter((property) => {
          if (filters.propertyTypeValue === property.details.propertyType) {
            return true;
          };
          return false;
        });
      }

      this.properties = filteredProperties;
    });
  }
}
