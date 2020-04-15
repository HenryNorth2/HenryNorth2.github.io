import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/Property';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  thumbnailSrc: string;
  address: string;

  constructor() { }

  ngOnInit(): void {
    let propertyMedia = this.property.details.media.find(media => media.url);
    this.thumbnailSrc = propertyMedia.url;

    this.address = this.property.details.displayAddress.replace(/,/g, ", ");
  }

}
