'use strict';

import {Deck} from '/components/deck/deck.mjs';

export class Game{
  constructor(p1, p2){
    this.player1 = p1;
    this.player2 = p2;
  }

  start(){
    let deck = new Deck();
    let currentPlayer = this.player1;

    while(deck.cards.cardCount() > 0){
      let card = deck.cards.deal();
      currentPlayer.hand.draw(card);

      if(currentPlayer === this.player1){
        currentPlayer = this.player2;
      }else{
        currentPlayer = this.player1;
      }
    }
  }
}
