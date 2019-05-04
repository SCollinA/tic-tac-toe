import { Component, OnInit } from '@angular/core';

import { BoardService } from './board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  rowCount: number;

  constructor(private boardService: BoardService) { }

  onInit() {
    this.rowCount = this.boardService.board.length;
  }
}
