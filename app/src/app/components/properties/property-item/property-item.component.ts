import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/Property';
import { STATUS_NUMBERS } from 'src/app/entities/entities';


@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  thumbnailSrc: string;
  statusString: string;
  address: string;

  constructor() { }

  ngOnInit(): void {
    let propertyMedia = this.property.details.media.find(media => media.url);
    this.thumbnailSrc = propertyMedia.url;

    this.statusString = this.getStatusString(this.property.details.status);
    this.address = this.property.details.displayAddress.replace(/,/g, ", ");
  }

  getStatusString = (statusNumber: number) => {
    const propertyTypeObject = STATUS_NUMBERS.find(element => element.value === statusNumber);

    if (propertyTypeObject) {
      return propertyTypeObject.name;
    } else {
      return 'Unknown';
    }
  }

}
