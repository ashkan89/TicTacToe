import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
      <button class="btnSquare" nbButton *ngIf="!value">{{ value }}</button>
      <button class="btnSquare" nbButton hero [status]="status" *ngIf="value">{{ value }}</button>
  `,
  styles: [
    `
    .btnSquare {
    width: 100%;
    height: 100%;
    font-size: 172px !important;
    }
    `
  ]
})
export class SquareComponent implements OnInit {
  constructor() { }

  @Input() value: 'X' | 'O';
  @Input() status: string;

  ngOnInit() {
  }
}

// <button class="btnSquare" nbButton * ngIf="!value" > {{ value }}</button>
//   < button class="btnSquare" nbButton hero status = "info" * ngIf="value == 'X'" > {{ value }}</button>
//     < button class="btnSquare" nbButton hero status = "danger" * ngIf="value == 'O'" > {{ value }}</button>
