import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../../models/Property';

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.css']
})
export class PropertyItemComponent implements OnInit {
  @Input() property:Property;

  constructor() { }

  ngOnInit(): void {
  }

}
