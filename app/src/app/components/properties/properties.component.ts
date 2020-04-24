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
  propertiesPerPage: number = 3;
  page: number = 1;

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;
    });
  }

}
