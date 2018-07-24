'use strict';

import {Card} from '/components/card/card.mjs';

/**
  * Uses Fisher-Yates shuffle algorithm
  * see https://bost.ocks.org/mike/shuffle/
  */
export class Deck{
  constructor(){
    this.cards = (function(){
      let privateDeck = [];

      return{
        buildDeck: function(){
          privateDeck = [];
          for(let s in Card.SUITES){
            for(let r in Card.RANKS){
              privateDeck.push(new Card(s,r));
            }
          }
        },

        get cardCount(){
          return privateDeck.length;
        },

        deal: function(){
          return privateDeck.shift();
        },

        shuffle: function(){
          let counter = privateDeck.length;
          while (counter > 0) {
              let randomCardIndex = Math.floor(Math.random() * counter);
              counter--;
              let thisCard = privateDeck[counter];
              privateDeck[counter] = privateDeck[randomCardIndex];
              privateDeck[randomCardIndex] = thisCard;
          }
        }
      }
    })();

    this.cards.buildDeck();
    this.cards.shuffle();
  }
}
