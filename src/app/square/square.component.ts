import { Component, OnInit, Input } from '@angular/core';

import { BoardService } from '../board.service';
import { Square } from '../square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() loc: number[];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }
}
