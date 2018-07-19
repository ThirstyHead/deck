'use strict';

import {Card} from './card.mjs';

let privateDeck = [];

export class Deck{
  constructor(){
    privateDeck = Deck.buildDeck();
    this.shuffle();
  }

  get length(){
    return privateDeck.length
  }

  /**
    * Uses Fisher-Yates shuffle algorithm
    * see https://bost.ocks.org/mike/shuffle/
    */
  shuffle(){
    let counter = privateDeck.length;
    while (counter > 0) {
        let randomCardIndex = Math.floor(Math.random() * counter);
        counter--;
        let thisCard = privateDeck[counter];
        privateDeck[counter] = privateDeck[randomCardIndex];
        privateDeck[randomCardIndex] = thisCard;
    }
  }

  deal(){
    return privateDeck.shift();
  }

  static buildDeck(){
    let cards = [];
    for(let s in Card.SUITES){
      for(let r in Card.RANKS){
        cards.push(new Card(s,r));
      }
    }
    return cards;
  }
}
