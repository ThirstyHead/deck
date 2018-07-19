'use strict';

import {Card} from './card.mjs';

export class Deck{
  constructor(){
    this.cards = this.buildDeck();
  }

  buildDeck(){
    let cards = [];
    for(let s in Card.SUITES){
      for(let r in Card.RANKS){
        cards.push(new Card(s,r));
      }
    }
    return cards;
  }
}
