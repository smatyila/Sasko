import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sasko-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.css']
})
export class BodyContentComponent implements OnInit {

  @Input() title: string;
  @Input() link: string;
  @Input() url: string;
  constructor() { }

  ngOnInit() {
  }

}
