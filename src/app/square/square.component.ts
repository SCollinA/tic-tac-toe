import { Component, OnInit, Input } from '@angular/core';

import { Square } from '../square'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() square: string

  constructor() { }

  ngOnInit() {
  }
}
