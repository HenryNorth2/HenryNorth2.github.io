import { Component, OnInit } from '@angular/core';
import { PROPERTY_TYPES } from 'src/app/entities/propertyTypes';

interface SelectFieldOptions {
  name: string;
  value: any;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  maxPrices: SelectFieldOptions[] = [
    { name: 'No perference', value: null },
    { name: '£100,000', value: 100000 },
    { name: '£150,000', value: 150000 },
    { name: '£200,000', value: 200000 },
    { name: '£250,000', value: 250000 },
    { name: '£300,000', value: 300000 },
    { name: '£500,000', value: 500000 },
    { name: '£750,000', value: 750000 },
    { name: '£1,000,000', value: 100000 }
  ];

  propertyTypes: SelectFieldOptions[] = [
    {name: 'No perference', value: null },
    ...PROPERTY_TYPES
  ];

  minBedroomsOptions: SelectFieldOptions[] = [
    { name: 'No perference', value: null },
    { name: '1', value: '1' },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: '4', value: '4' },
    { name: '5', value: '5' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClickFilter() {
    console.log('search was clicked')
  }

}
