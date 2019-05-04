import { Component, OnInit, Input } from '@angular/core';

import { BoardService } from '../board.service';
import { Square } from '../square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  @Input() square: Square;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }
}
