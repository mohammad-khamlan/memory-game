import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemoryGameFacade } from '../../memory-game.facade';

@Component({
  selector: 'memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit, OnDestroy {

  subscriptions$: Array<Subscription> = [];
  playerNumber: number = 1;

  constructor(private _memoryGameFacade: MemoryGameFacade) { }

  ngOnInit() {
    this.subscriptions$.push(
      this._memoryGameFacade.getCurrentPlayer().subscribe(playerNumber => {
        this.playerNumber = playerNumber;
      })
    );
  }

  
  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }

}
