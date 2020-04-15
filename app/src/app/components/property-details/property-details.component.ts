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
  property:any;
  properties:Property[];

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
