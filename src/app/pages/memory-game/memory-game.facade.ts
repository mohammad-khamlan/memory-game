import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { MemoryGameState } from './state/memory-game-state';


@Injectable()
export class MemoryGameFacade {
  constructor(
    private _memoryGameState: MemoryGameState,
    private router: Router,
  ) { }

  setCurrentPlayer(playerNumber: number) {
    this._memoryGameState.setCurrentPlayer(playerNumber);
 }

  getCurrentPlayer(): Observable<number>{
    return this._memoryGameState.getCurrentPlayer().pipe();
  }

  increasePlayerOnePoints() {
    this._memoryGameState.increasePlayerOnePoints();
  }

  get playerOnePoints$(): Observable<number> {
    return this._memoryGameState.getPlayerOnePoints().pipe();
  }

  increasePlayerTowPoints() {
    this._memoryGameState.increasePlayerTowPoints();
  }

  get playerTowPoints$(): Observable<number> {
    return this._memoryGameState.getPlayerTowPoints().pipe();
  }

  addToLogs(playerData: { playerName: string, cards: Array<number>, status: boolean }) {
    this._memoryGameState.addToLogs(playerData);
  }

  getLogs(): Observable<Array<{ playerName: string, cards: Array<number>, status: boolean }>> {
    return this._memoryGameState.getLogs().pipe();
  }


}
