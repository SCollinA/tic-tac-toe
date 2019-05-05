import { Injectable } from '@angular/core';

import { Square } from './square';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  isXTurn = true;

  board = [
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
    [new Square(), new Square(), new Square()],
  ];

  constructor() { }

  onSelect(loc: number[]) {
    console.log(
      'does it work',
      this.isXTurn,
      this.board
    );
    const square = this.board[loc[0]][loc[1]];
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
