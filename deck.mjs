'use strict';

export class Deck{
  constructor(){
    this.cards = this.buildDeck();
  }

  buildDeck(){
    let cards = [];
    for(let i=0; i<52; i++){
      cards.push(i);
    }
    return cards;
  }
}
