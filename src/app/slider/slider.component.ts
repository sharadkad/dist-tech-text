import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  products:any;
  slideConfig = {"slidesToShow": 4, "slidesToScroll": 2, "autoplay": true, "dots":true,"arrows":true, "responsive": [
    {
      "breakpoint": 1024,
      "settings": {
        "slidesToShow": 3,
        "slidesToScroll": 1,
        "autoplay": true,
        "infinite": true,
        "dots": true
      },
    },
    {
      "breakpoint": 800,
      "settings": {
        "slidesToShow": 2,
        "slidesToScroll": 1,
        "autoplay": true
      },
    },
    {
      "breakpoint": 480,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "autoplay": true
      },
    },
  ]};
  constructor(private _http:HttpClient) { }

  ngOnInit(): void {

    let res = this._http.get('https://my-json-server.typicode.com/sharadkad/mockjson/carouselData');
    res.subscribe((data)=> this.products = data );
  }

}
