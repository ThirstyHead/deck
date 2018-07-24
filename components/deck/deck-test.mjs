'use strict';

import {Deck} from '/components/deck/deck.mjs';
export {tests, test};

let tests = new Map();

function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}


/********** TESTS ***********/

tests.set("it should have 52 cards by default", () => {
  const d = new Deck();
  return 52 === d.cards.cardCount;
});

tests.set("deck.deal() should remove the top card from deck.cards", () => {
  const d = new Deck();
  const initalDeckSize = d.cards.cardCount;
  const dealtCard = d.cards.deal();
  const newDeckSize = d.cards.cardCount;

  return newDeckSize === (initalDeckSize - 1);
});

tests.set("deck.deal() can be used until deck is empty, then returns undefined", () => {
  const d = new Deck();
  let initialDeckSize = d.cards.cardCount;
  let counter = 0;
  for(let i=0; i<initialDeckSize; i++){
    const card = d.cards.deal();
    counter++;
  }

  // once deck is empty, deck.deal() should return undefined
  const cardFromEmptyDeck = d.cards.deal();

  return counter === initialDeckSize &&
         cardFromEmptyDeck === undefined;
});
