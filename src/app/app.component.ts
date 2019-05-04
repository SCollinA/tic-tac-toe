import { Component, OnInit } from '@angular/core';

import { BoardService } from './board.service';
import { Square } from './square';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  board: Square[][];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.board = this.boardService.board;
  }
}
