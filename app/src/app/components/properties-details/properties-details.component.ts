import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

const properties = [
  { propertyId: 1, name: "House 1", listingId: "1" },
  { propertyId: 2, name: "House 2", listingId: "2" },
  { propertyId: 3, name: "House 3", listingId: "3" },
  { propertyId: 4, name: "House 4", listingId: "4" },
  { propertyId: 5, name: "House 5", listingId: "5" },
  { propertyId: 6, name: "House 6", listingId: "6" },
];

@Component({
  selector: 'app-properties-details',
  templateUrl: './properties-details.component.html',
  styleUrls: ['./properties-details.component.css']
})
export class PropertiesDetailsComponent implements OnInit {
  public property:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let propertyId = +params.get('propertyId');
      let test = properties.find(property => property.propertyId === propertyId)
      this.property = test;
    });
  }

}
