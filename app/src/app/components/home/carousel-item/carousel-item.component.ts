import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
  @Input() title: string;
  @Input() imgSrc: string;
  @Input() routeTo: string;

  constructor() { }

  ngOnInit(): void {
  }

}
