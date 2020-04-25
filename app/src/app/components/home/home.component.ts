import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselConfig = {
    type: 'carousel',
    autoplay: 4000
  }

  constructor() { }

  ngOnInit(): void {
    new Glide('.glide', this.carouselConfig).mount();
  }

}
