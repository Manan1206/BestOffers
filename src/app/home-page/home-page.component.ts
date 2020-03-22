import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  productsList = ['Processor', 'RAM', 'Mouse', 'Keyboard']
  maxPrice: number = 0;
  
  minValue: number = 0;
  maxValue: number = 10000;
  options: Options = {
    floor: 0,
    ceil: 500000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> <i class="fa fa-inr>' + value + '</i>';
        case LabelType.High:
          return '<b>Max price:</b> <i class="fa fa-inr>' + value + '</i>';
        default:
          return '$' + value;
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
