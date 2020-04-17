import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/Property';
import { BookViewingModalComponent } from './book-viewing-modal/book-viewing-modal.component';
import { MakeEnquiryModalComponent } from './make-enquiry-modal/make-enquiry-modal.component';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  properties: Property[];
  property: Property;
  bedroomsString: string;
  propertyType: string;
  address: string;
  statusString: string;

  constructor(
    private route:ActivatedRoute,
    private propertyService:PropertyService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;

      this.route.paramMap.subscribe((params: ParamMap) => {
        let propertyId = +params.get('propertyId');
        this.property = this.properties.find(property => property.propertyId === propertyId);
      });

      this.bedroomsString = this.getBedroomsString(this.property.details.bedrooms);
      this.propertyType = this.getPropertyType(this.property.details.propertyType);
      this.address = this.property.details.displayAddress.replace(/,/g, ", ");
      this.statusString = this.getStatusString(this.property.details.status);
    });
  }

  getBedroomsString = (numberOfBedrooms:number) => {
    if (numberOfBedrooms === 1) {
      return numberOfBedrooms + ' Bedroom';
    } else {
      return numberOfBedrooms + ' Bedrooms';
    }
  }

  getPropertyType = (propertyType) => {
    if (propertyType === 1) {
      return 'Flat';
    } if (propertyType === 2) {
      return 'Detached House';
    } if (propertyType === 3) {
      return 'Semi-detached House';
    } if (propertyType === 4) {
      return 'Terraced House';
    } if (propertyType === 5) {
      return 'Cottage';
    } if (propertyType === 6) {
      return 'Bungalow';
    } else {
      return 'Property';
    }
  }

  getStatusString = (statusNumber) => {
    if (statusNumber === 1) {
      return 'For Sale';
    } if (statusNumber === 2) {
      return 'Under Offer';
    } else {
      return 'Unknown';
    }
  }

  openViewingDialog(): void {
    this.dialog.open(BookViewingModalComponent, {
      width: '500px',
    });
  }

  openEnquiryDialog(): void {
    this.dialog.open(MakeEnquiryModalComponent, {
      width: '500px',
    });
  }

}
