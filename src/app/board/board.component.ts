import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: any[];
  xIsNext: boolean;
  animating: boolean;
  winner: string;
  interval: any;

  constructor() { }

  ngOnInit() {
    this.newGame();
  }

  public newGame() {
    clearInterval(this.interval);
    this.squares = Array(16).fill({ value: null, status: '' });
    this.winner = null;
    this.xIsNext = true;
    this.animating = false;
    this.interval = null;
  }

  get player() {
    return this.xIsNext ? { value: 'X', status: this.playerStatus('X') } : { value: 'O', status: this.playerStatus('O') };
  }

  get animateColor() {
    return 'success';
  }

  get isDraw() {
    return this.squares.every((item) => {
      return item.value != null;
    }) && !this.winner;
  }

  get gameOver() {
    return this.isDraw || this.winner;
  }

  public playerStatus(value: string) {
    return value === 'X' ? 'info' : 'danger';
  }

  public makeMove(idx: number) {
    if (!this.squares[idx].value && !this.gameOver) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.winner = this.calculateWinner();
    }
  }

  public animateWinner(...row) {
    this.interval = setInterval((...rowItem) => {
      for (const index of rowItem) {
        this.squares[index].status === this.animateColor ?
          this.squares[index].status = this.playerStatus(this.squares[index].value) : this.squares[index].status = this.animateColor;
      }
    }, 500, ...row);
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
      if (this.squares[a].value &&
        this.squares[a].value === this.squares[b].value &&
        this.squares[a].value === this.squares[c].value &&
        this.squares[a].value === this.squares[d].value) {
        this.animateWinner(...item);
        return this.squares[a].value;
      }
    }

    return null;
  }
}
