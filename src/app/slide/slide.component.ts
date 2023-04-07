import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {
  constructor() { }

  ngOnInit() {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items:2
      },
      940: {
        items:2
      }
    },
    nav: true
  }
}
