import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  public newGame() {
    this.squares = Array(16).fill(null);
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  get isDraw() {
    return this.squares.every((item) => {
      return item != null;
    }) && !this.winner;
  }

  get gameOver() {
    return this.isDraw || this.winner;
  }

  public makeMove(idx: number) {
    if (!this.squares[idx] && !this.gameOver) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  public calculateWinner(): string {
    // const lines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6]
    // ];

    const lines = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12]
    ];

    for (const item of lines) {
      const [a, b, c, d] = item;
      // for (let i = 0; i < lines.length; i++) {
      //   const [a, b, c] = lines[i];
      if (this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c] &&
        this.squares[a] === this.squares[d]) {
        return this.squares[a];
      }
    }

    return null;
  }
}
