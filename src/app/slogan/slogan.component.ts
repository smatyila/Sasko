import { Component, OnInit } from '@angular/core';
import { Counter } from '../Counter';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class UnemployedCounterComponent implements OnInit {

  count: Counter = {
    unemployedCount: 3.3
  };
  constructor() { }

  ngOnInit() {
  }

}
