'use strict';

import {Deck} from '/components/deck/deck.mjs';

export class Game{
  constructor(p1, p2){
    this.player1 = p1;
    this.player2 = p2;
    this.deck = new Deck();
  }

  new(){
    this.deck.shuffle();
    let counter = 0;
    for(let card of this.deck){
      if(counter % 2 === 0){
        this.player1.hand.draw(card);

      }else{
        this.player2.hand.draw(card);
      }
      counter++;
    }
  }


}
