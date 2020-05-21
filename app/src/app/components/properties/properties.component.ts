import { Component, OnInit } from '@angular/core';
import { Property } from '../../models/Property';
import { PropertyService } from '../../services/property.service';

interface SelectFieldOptions {
  name: string;
  value: any;
}

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Property[];
  pageSize: number = 10;
  page: number = 1;
  sortFilterValue = null;

  sortFilters: SelectFieldOptions[] = [
    { name: 'Price (High to Low)', value: 'priceHighToLow' },
    { name: 'Price (Low to High)', value: 'priceLowToHigh' },
    { name: 'Bedrooms', value: 'bedrooms' }
  ];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

  sortProperties() {
    if (this.sortFilterValue === 'priceHighToLow') {
      this.properties.sort((a, b) => b.details.price - a.details.price);
    } else if (this.sortFilterValue === 'priceLowToHigh') {
      this.properties.sort((a, b) => a.details.price - b.details.price);
    } else if (this.sortFilterValue === 'bedrooms') {
      this.properties.sort((a, b) => a.details.bedrooms - b.details.bedrooms);
    }
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
