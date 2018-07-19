'use strict';

import {Deck} from './deck.mjs';
export {tests, test};

let tests = new Map();

tests.set("it should have 52 cards by default", () => {
  const d = new Deck();
  return 52 === d.cards.length;
});

tests.set("it should have a shuffle method", () => {
  const d = new Deck();
  const originalOrder = [].concat(d.cards);
  d.shuffle();
  return 52 === d.cards.length &&
         d.cards.some( (thisCard, thisIndex) => {
           return originalOrder.indexOf(thisCard) !== thisIndex;
         });
});

tests.set("deck.deal() should remove the top card from deck.cards", () => {
  const d = new Deck();
  const initalDeckSize = d.cards.length;
  const topCard = d.cards[0];
  const dealtCard = d.deal();
  const newDeckSize = d.cards.length;

  return topCard === dealtCard &&
         newDeckSize === (initalDeckSize - 1);
});




function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
