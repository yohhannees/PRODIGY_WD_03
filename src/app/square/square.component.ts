import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button>{{value}}</button>`,
  // templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  styles:[]
})
export class SquareComponent {
  @Input() value: 'X' | 'O' | undefined;
}
