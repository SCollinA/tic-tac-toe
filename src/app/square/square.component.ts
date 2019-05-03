import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() square: string
  @Input() isXTurn: boolean

  constructor() { }

  ngOnInit() {
  }

  onSelect() {
    console.log(
      'does it work', 
      this.isXTurn, 
      this.square
    )
    if (!this.square) {
      if (this.isXTurn) {
        this.square = 'x'
      } else {
        this.square = 'o'
      }
      this.isXTurn = !this.isXTurn
    }
    console.log(
      'does it work', 
      this.isXTurn, 
      this.square
    )
  }
}
