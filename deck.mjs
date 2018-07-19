'use strict';

import {Card} from './card.mjs';

export class Deck{
  constructor(){
    this.cards = this.buildDeck();
    this.shuffle();
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

  /**
    * Uses Fisher-Yates shuffle algorithm
    * see https://bost.ocks.org/mike/shuffle/
    */
  shuffle(){
    let counter = this.cards.length;
    while (counter > 0) {
        let randomCardIndex = Math.floor(Math.random() * counter);
        counter--;
        let thisCard = this.cards[counter];
        this.cards[counter] = this.cards[randomCardIndex];
        this.cards[randomCardIndex] = thisCard;
    }
    return this.cards;
  }
}
