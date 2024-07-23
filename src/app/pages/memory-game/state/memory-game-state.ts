import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class MemoryGameState {
  private currentPlayer = new BehaviorSubject<number>(1);
  private playerOnePoints = new BehaviorSubject<number>(0);
  private playerTowPoints = new BehaviorSubject<number>(0);
  private logs = new BehaviorSubject<Array<{ playerName: string, cards: Array<number>, status: boolean }>>([]);

  setCurrentPlayer(playerNumber: number){
    this.currentPlayer.next(playerNumber);
  }

  getCurrentPlayer(): Observable<number>{
    return this.currentPlayer.asObservable();
  }

  increasePlayerOnePoints() {
    this.playerOnePoints.next(this.playerOnePoints.getValue() + 1);
  }

  getPlayerOnePoints(): Observable<number> {
    return this.playerOnePoints.asObservable();
  }

  increasePlayerTowPoints() {
    this.playerTowPoints.next(this.playerTowPoints.getValue() + 1);
  }

  getPlayerTowPoints(): Observable<number> {
    return this.playerTowPoints.asObservable();
  }

  addToLogs(playerData: { playerName: string, cards: Array<number>, status: boolean }) {
    this.logs.next([...this.logs.getValue(), ...[playerData]])
  }

  getLogs(): Observable<Array<{ playerName: string, cards: Array<number>, status: boolean }>>{
    return this.logs.asObservable();
  }

}


