import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { BookViewingModalComponent } from './book-viewing-modal/book-viewing-modal.component';
import { MakeEnquiryModalComponent } from './make-enquiry-modal/make-enquiry-modal.component';

const properties = [
  { propertyId: 1, name: "House 1", listingId: "1" },
  { propertyId: 2, name: "House 2", listingId: "2" },
  { propertyId: 3, name: "House 3", listingId: "3" },
  { propertyId: 4, name: "House 4", listingId: "4" },
  { propertyId: 5, name: "House 5", listingId: "5" },
  { propertyId: 6, name: "House 6", listingId: "6" },
];

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  public property:any;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let propertyId = +params.get('propertyId');
      this.property = properties.find(property => property.propertyId === propertyId);
    });
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
