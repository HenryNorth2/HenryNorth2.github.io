import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Glide from '@glidejs/glide';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/Property';
import { BookViewingModalComponent } from './book-viewing-modal/book-viewing-modal.component';
import { MakeEnquiryModalComponent } from './make-enquiry-modal/make-enquiry-modal.component';
import { PROPERTY_TYPES } from 'src/app/entities/propertyTypes';


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  properties: Property[];
  property: Property;
  propertyImages: any[];
  bedroomsString: string;
  propertyType: string;
  address: string;
  statusString: string;
  carouselConfig = {
    type: 'carousel'
  }

  constructor(
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(properties => {
      this.properties = properties;

      this.route.paramMap.subscribe((params: ParamMap) => {
        let propertyId = +params.get('propertyId');
        this.property = this.properties.find(property => property.propertyId === propertyId);
      });

      this.propertyImages = this.getPropertyImages(this.property.details.media);
      this.bedroomsString = this.getBedroomsString(this.property.details.bedrooms);
      this.propertyType = this.getPropertyTypeString(this.property.details.propertyType);
      this.address = this.property.details.displayAddress.replace(/,/g, ", ");
      this.statusString = this.getStatusString(this.property.details.status);
    });
  }

  getPropertyImages = (media: any[]) => {
    const propertyImages = media.filter((item) => {
      return item.mediaType === 1;
    });

    return propertyImages;
  }

  getBedroomsString = (numberOfBedrooms: number) => {
    if (numberOfBedrooms === 1) {
      return numberOfBedrooms + ' Bedroom';
    } else {
      return numberOfBedrooms + ' Bedrooms';
    }
  }

  getPropertyTypeString = (propertyType: number) => {
    const propertyTypeObject = PROPERTY_TYPES.find(element => element.value === propertyType);

    if (propertyTypeObject) {
      return propertyTypeObject.name;
    } else {
      return 'Property'
    }
  }

  getStatusString = (statusNumber: number) => {
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
