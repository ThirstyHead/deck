'use strict';

import {Deck} from './deck.mjs';
export {tests, test};

let tests = new Map();

tests.set("it should have 52 cards by default", () => {
  const d = new Deck();
  return 52 === d.length;
});

// tests.set("it should have a shuffle method", () => {
//   const d = new Deck();
//   const originalOrder = [].concat(d.cards);
//   d.shuffle();
//   return 52 === d.cards.length &&
//          d.cards.some( (thisCard, thisIndex) => {
//            return originalOrder.indexOf(thisCard) !== thisIndex;
//          });
// });

tests.set("deck.deal() should remove the top card from deck.cards", () => {
  const d = new Deck();
  const initalDeckSize = d.length;
  const dealtCard = d.deal();
  const newDeckSize = d.length;

  return newDeckSize === (initalDeckSize - 1);
});

tests.set("deck.deal() can be used until deck is empty, then returns undefined", () => {
  const d = new Deck();
  let initialDeckSize = d.length;
  let counter = 0;
  for(let i=0; i<initialDeckSize; i++){
    const card = d.deal();
    counter++;
  }

  // once deck is empty, deck.deal() should return undefined
  const cardFromEmptyDeck = d.deal();

  return counter === initialDeckSize &&
         cardFromEmptyDeck === undefined;
});

tests.set("for..of iterates through entire deck", () => {
  const d = new Deck();
  const initialDeckSize = d.length;
  let counter = 0;
  for(let card of d){
    counter++;
  }
  return d.length === 0 &&
         counter === initialDeckSize;
});

tests.set("deck implements the spread operator", () => {
  const d = new Deck();
  const initialDeckSize = d.length;
  const firstCard = d.deal();
  const secondCard = d.deal();
  const theRest = [...d];

  return (initialDeckSize - 2) === theRest.length &&
         d.length === 0;
});



function test(){
  let results = [];
  tests.forEach( (test, name) => {
    results.push(`[${test()}] ${name}`);
  });
  return results;
}
