import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';

const carouselConfig = {
  type: 'carousel',
  autoplay: 5000
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    new Glide('.glide', carouselConfig).mount();
  }

}
