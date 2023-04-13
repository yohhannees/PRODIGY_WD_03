import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<p>{{random}}</p>`,
  // templateUrl: './square.component.html',
  
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
  random=Math.random();

}
