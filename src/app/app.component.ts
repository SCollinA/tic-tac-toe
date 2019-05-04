import { Component, OnInit } from '@angular/core';

import { BoardService } from './board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tic-tac-toe';
  board: string[][];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.board = this.boardService.board;
  }
}
