import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styles: [
    "table{border:1px solid grey}",
    "th,td{padding:1em}",
    "td{border:solid lightgrey 1px"
]
})
export class FactorComponent implements OnInit {
  val: number = 0.5;
  title = 'factor';
  constructor() { }

  ngOnInit() {
  }

}
