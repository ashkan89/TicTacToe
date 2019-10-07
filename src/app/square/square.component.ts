import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button class="btnSquare" nbButton *ngIf="!value">{{ value }}</button>
      <button class="btnSquare" nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button class="btnSquare" nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: [
    `
    .btnSquare {
    width: 100%;
    height: 100%;
    }
    `
  ]
})
export class SquareComponent implements OnInit {
  constructor() { }

  @Input() value: 'X' | 'O';

  ngOnInit() {
  }

}