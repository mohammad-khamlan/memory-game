import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'false',
        style({
          transform: 'none',
        })
      ),
      state(
        'true',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('false => true', [animate('400ms')]),
      transition('true => false', [animate('400ms')]),
    ]),
  ],

})
export class FlipCardComponent implements OnInit {
  @Input('data') data: number = 0;
  @Input('isOpen') isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
