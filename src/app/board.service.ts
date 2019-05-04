import { Injectable } from '@angular/core';

import { Square } from './square';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  isXTurn = true;

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  constructor() { }

  onSelect(square: Square) {
    console.log(
      'does it work',
      this.isXTurn,
      this.board
    );
    if (!square.val) {
      if (this.isXTurn) {
        square.val = 'x';
      } else {
        square.val = 'o';
      }
      this.isXTurn = !this.isXTurn;
    }
    console.log(
      'does it work',
      this.isXTurn,
      this.board
    );
  }
}
