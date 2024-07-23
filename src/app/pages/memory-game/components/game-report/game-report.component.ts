import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, combineLatest, debounceTime } from 'rxjs';
import { MemoryGameFacade } from '../../memory-game.facade';


interface Logs {
  playerName: string;
  cardsNumber: Array<{ playerName: string, cards: Array<number>, status: boolean }>;
  success: boolean;
}

@Component({
  selector: 'game-report',
  templateUrl: './game-report.component.html',
  styleUrls: ['./game-report.component.scss']
})
export class GameReportComponent implements OnInit, OnDestroy {
  winner: string = "";
  numberOfCorrectCards: number = 0;
  logs: Array<{ playerName: string; cards: number[]; status: boolean; }> = [];

  constructor(private _memoryGameFacade: MemoryGameFacade) { }
  
  subscriptions$: Array<Subscription> = [];

  ngOnInit() {
    this.subscriptions$.push(
      combineLatest([
        this._memoryGameFacade.playerOnePoints$,
        this._memoryGameFacade.playerTowPoints$,
      ]).pipe(debounceTime(0)).subscribe(([playerOnePoints, playerTowPoints]) => {
        if (playerOnePoints > playerTowPoints) {
          this.winner = "The winner is Player 1";
          this.numberOfCorrectCards = playerOnePoints;
        } else if (playerOnePoints < playerTowPoints) {
          this.winner = "The winner is Player 2";
          this.numberOfCorrectCards = playerTowPoints;
        } else {
          this.winner = "Tie"
          this.numberOfCorrectCards = playerOnePoints + playerTowPoints;
        }
      }),
      this._memoryGameFacade.getLogs().subscribe(logs => {
        this.logs = logs;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }

}
