import { Component, Input, OnInit } from '@angular/core';
import { MemoryGameFacade } from '../../memory-game.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'board-game',
  templateUrl: './board-game.component.html',
  styleUrls: ['./board-game.component.scss']
})
export class BoardGameComponent implements OnInit {
  @Input('playerNumber') playerNumber: number = 1;

  cardsData: Array<any> = [
    { value: 1, isOpen: false }, { value: 4, isOpen: false }, { value: 7, isOpen: false },
    { value: 1, isOpen: false }, { value: 4, isOpen: false }, { value: 7, isOpen: false },
    { value: 2, isOpen: false }, { value: 5, isOpen: false }, { value: 8, isOpen: false },
    { value: 2, isOpen: false }, { value: 5, isOpen: false }, { value: 8, isOpen: false },
    { value: 3, isOpen: false }, { value: 6, isOpen: false }, { value: 9, isOpen: false },
    { value: 3, isOpen: false }, { value: 6, isOpen: false }, { value: 9, isOpen: false }
  ]

  openedCard: Array<number> = [];
  numberOfOpenedCards: number = 0;

  constructor(private _memoryGameFacade: MemoryGameFacade, private _router: Router) { }

  ngOnInit() {
    this.shuffleArray(this.cardsData);
  }

  shuffleArray(array: Array<{}>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  cardClicked(index: number) {
    this.cardsData[index].isOpen = true;
    if (this.openedCard.length != 2) {
      this.openedCard.push(index);
    }
    if (this.openedCard.length === 2){
      this.checkIfSimilar(this.openedCard[0], this.openedCard[1]);
    }
  }

  checkIfSimilar(firstCardIndex: number, secondCardIndex: number) {
    if (this.cardsData[firstCardIndex].value === this.cardsData[secondCardIndex].value) {
      this._memoryGameFacade.addToLogs({ playerName: "Player " + this.playerNumber, cards: [this.cardsData[firstCardIndex].value, this.cardsData[secondCardIndex].value], status: true });
      if (this.playerNumber === 1) {
        this._memoryGameFacade.increasePlayerOnePoints();
        this._memoryGameFacade.setCurrentPlayer(2);
      } else {
        this._memoryGameFacade.increasePlayerTowPoints();
        this._memoryGameFacade.setCurrentPlayer(1);
      }
      this.numberOfOpenedCards = this.numberOfOpenedCards + 2;
      this.openedCard = [];
    } else {
      setTimeout(() => {
        this.cardsData[firstCardIndex].isOpen = false;
        this.cardsData[secondCardIndex].isOpen = false;
        if (this.playerNumber === 1) this._memoryGameFacade.setCurrentPlayer(2);
        else this._memoryGameFacade.setCurrentPlayer(1);
        this.openedCard = [];
      }, 1000)
      this._memoryGameFacade.addToLogs({ playerName: "Player " + this.playerNumber, cards: [this.cardsData[firstCardIndex].value, this.cardsData[secondCardIndex].value], status: false })
    }

    if (this.numberOfOpenedCards === 18) {
      setTimeout(() => {
        this._router.navigate(['gameReport'])
      }, 1500)
    }
  }

}
